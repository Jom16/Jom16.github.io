// Theme toggle.
// - No saved choice: the theme follows the system (CSS only, no data-theme).
// - Click: switch to the opposite of the effective theme, set
//   <html data-theme="dark|light"> and save the choice in localStorage.
// Loaded in <head> without defer so a saved choice applies before first paint.
(function () {
  'use strict';

  var STORAGE_KEY = 'theme';
  var root = document.documentElement;
  var lightQuery = window.matchMedia
    ? window.matchMedia('(prefers-color-scheme: light)')
    : null;

  function readSaved() {
    try {
      var value = window.localStorage.getItem(STORAGE_KEY);
      return value === 'dark' || value === 'light' ? value : null;
    } catch (error) {
      return null; // Storage blocked: follow the system.
    }
  }

  function save(value) {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch (error) {
      // Storage blocked: the choice still works for this page view.
    }
  }

  function effectiveTheme() {
    var forced = root.getAttribute('data-theme');
    if (forced === 'dark' || forced === 'light') {
      return forced;
    }
    return lightQuery && lightQuery.matches ? 'light' : 'dark';
  }

  // Icon and label: sun + "switch to light" when dark, moon + "switch to dark" when light.
  function updateButton(button) {
    var mode = effectiveTheme();
    var label = mode === 'dark'
      ? button.getAttribute('data-label-to-light')
      : button.getAttribute('data-label-to-dark');
    button.setAttribute('data-mode', mode);
    button.setAttribute('aria-label', label);
    button.setAttribute('title', label);
  }

  function init() {
    var button = document.querySelector('[data-theme-toggle]');
    if (!button) {
      return;
    }

    updateButton(button);
    button.hidden = false;

    button.addEventListener('click', function () {
      var next = effectiveTheme() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      save(next);
      updateButton(button);
    });

    // Keep the icon in sync if the system theme changes and nothing is saved.
    if (lightQuery) {
      var onChange = function () {
        updateButton(button);
      };
      if (lightQuery.addEventListener) {
        lightQuery.addEventListener('change', onChange);
      } else if (lightQuery.addListener) {
        lightQuery.addListener(onChange);
      }
    }
  }

  // Apply a saved choice right away (before paint).
  var saved = readSaved();
  if (saved) {
    root.setAttribute('data-theme', saved);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
