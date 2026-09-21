# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm test                        # run all tests
node --test sum.test.js         # run a single test file
```

## Architecture

This is a minimal Node.js project with no external dependencies.

- `sum.js` — exports the `sum(a, b)` function using CommonJS (`module.exports`)
- `sum.test.js` — tests using Node's built-in `node:test` runner and `node:assert/strict`

Test files are discovered automatically by `node --test` via the `*.test.js` naming convention.
