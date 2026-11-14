# CLAUDE.md

Project conventions for Claude Code. Read this before doing anything.

## Project

Personal bilingual (ES/EN) site and professional growth log for Jum, hosted on GitHub Pages at https://jom16.github.io/. Owner keeps 100% control of the code and must be able to maintain it alone.

## Stack

- Plain static HTML, CSS and JavaScript. No build step.
- No frameworks or dependencies without explicit approval.
- Structure: `es/`, `en/`, `assets/css`, `assets/js`, `assets/img`, `index.html`.

## Branches

- `main` is production. GitHub Pages publishes from it. It is protected: changes arrive only through a pull request from `QA`.
- `QA` is where all work happens. Never commit or push directly to `main`.

## Working rules

- Propose each change and explain it before editing. Wait for approval.
- Never run `git commit` or `git push` unless asked.
- Never delete files. List them for manual deletion instead.
- One step at a time. Do not jump ahead.
- Before saying a task is done, verify the result and confirm it matches what was asked.
- If something cannot be verified, say "not verified". Never present it as fact.

## Language

- Code, comments, commit messages and file names: English.
- Explanations to the owner: Spanish, informal "tu", short and direct.

## Commits

Conventional Commits in English, for example `feat: add language toggle` or `docs: update README`.

## Code conventions

- Semantic HTML, accessible by default (alt text, labels, contrast, keyboard navigation).
- Every page exists in both `es/` and `en/` with the same structure.
- Keep code simple and readable. Prefer clarity over cleverness.
- No secrets and no personal email in the repository.

## Amazon affiliate links

When affiliate links are added, every page that has them must show the disclosure "As an Amazon Associate I earn from qualifying purchases".
