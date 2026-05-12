# Contributing to BizPilotHub

Thanks for helping improve BizPilotHub.

## Local Setup

```bash
npm install
npm run dev
```

## Useful Checks

```bash
npm run lint
npm run build
npm run test
```

## Branch Naming

- `feat/...`
- `fix/...`
- `docs/...`
- `refactor/...`
- `test/...`

## Commit Style

- `feat: add dashboard shell`
- `fix: harden api error handler`
- `docs: update repo layout`

## Pull Request Checklist

- The project installs from the root with `npm install`
- The root `dev` script starts the workspaces
- Lint passes
- Typecheck or tests pass for the touched workspace
- Docs are updated when behavior changes

## Notes

- Keep auth and MongoDB changes separate until the foundation is in place.
- Prefer the shared workspace packages instead of duplicating helpers or config.
