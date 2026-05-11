# TenantForge
Production-ready MERN SaaS starter with multi-tenancy, RBAC, auth, projects, audit logs, and opensource contributor workflow.
## Why TenantForge?
Most MERN starters stop at login/signup. Real SaaS products need tenant isolation, organization
workspaces, permissions, auditability, notifications, and maintainable architecture. TenantForge is
built to solve that.
## Features
- Multi-tenant workspace architecture
- JWT auth with refresh token flow
- Role-based access control
- Organization and member management
- Project management module
- In-app notifications
- Audit logs
- Dockerized local development
- API documentation
- Contributor-friendly repo structure
## Tech Stack
- React + TypeScript
- Node.js + Express + TypeScript
- MongoDB + Mongoose
- Tailwind CSS
- React Query
- Zod
- Docker
- GitHub Actions
- Jest + Supertest
## Getting Started
git clone https://github.com/your-username/tenantforge.git
cd tenantforge
pnpm install
cp apps/api/.env.example apps/api/.env
cp apps/web/.env.example apps/web/.env
docker compose up -d
pnpm dev
## Roadmap
- Repo foundation
- Auth module
- Workspace creation
- RBAC
- Projects
- Notifications
- Audit logs
- Docs
- Tests and CI
## Contributing
Please read CONTRIBUTING.md before opening a PR.
## License
MIT
