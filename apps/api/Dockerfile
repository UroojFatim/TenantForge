FROM node:20-alpine AS base
WORKDIR /repo

COPY package.json package-lock.json turbo.json ./
COPY apps ./apps
COPY packages ./packages

RUN npm install

FROM base AS dev
WORKDIR /repo
EXPOSE 4000
CMD ["npm", "run", "dev", "--workspace", "@bizpilothub/api"]

FROM base AS build
WORKDIR /repo
RUN npm run build --workspace @bizpilothub/api

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=base /repo/node_modules ./node_modules
COPY --from=build /repo/apps/api/dist ./dist
EXPOSE 4000
CMD ["node", "dist/server.js"]