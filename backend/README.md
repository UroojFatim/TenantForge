# TenantForge — Backend

This folder contains a simple Node.js + Express backend scaffold.

Quick start:

1. cd backend
2. npm install
3. npm run dev    # requires `nodemon` (dev script)

Available endpoints:
- `GET /api/health` — basic health check
- `GET /api/hello` — sample message
- `POST /api/echo` — echoes received JSON body

Notes:
- Add environment variables in a `.env` file and load them as needed.
- To run in production: `npm start` (runs `node src/index.js`).
