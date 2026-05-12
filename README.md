# BizPilotHub

BizPilotHub is now a true npm-workspaces monorepo with a TypeScript web app, a TypeScript Express API foundation, shared packages, and Docker-ready local development.

Auth, MongoDB models, organizations, and RBAC are intentionally not implemented yet. This repository is the production-minded scaffold you can extend next.

## Layout

- `apps/web` - React + Vite starter shell
- `apps/api` - Express API foundation
- `packages/ui` - shared UI primitives
- `packages/types` - shared TypeScript types
- `packages/utils` - shared utilities
- `packages/eslint-config` - shared ESLint presets
- `packages/tsconfig` - shared TypeScript presets
- `infra/docker` - development Compose setup
- `docs` - supporting project docs

## Requirements

- Node.js 20 or newer
- npm 10 or newer
- Docker Desktop if you want the development stack

## Quick Start

```bash
npm install
npm run dev
```

The root `dev` script runs the web and API apps through Turborepo. The API is available at `http://localhost:4000` and the web app at `http://localhost:3000`.

## Docker Development Stack

```bash
docker compose -f infra/docker/compose.dev.yml up --build
```

This starts the web app, API, and MongoDB for local development. MongoDB is present for future work but is not wired into the API yet.

## Current State

The repository currently provides:

- a shared monorepo workspace layout
- TypeScript starter apps for web and API
- shared lint and TypeScript presets
- reusable UI and utility packages
- Dockerfiles for both apps
- a development Compose stack

## Next Steps

The intended follow-up work is authentication, MongoDB integration, organizations, RBAC, and deployment hardening.
