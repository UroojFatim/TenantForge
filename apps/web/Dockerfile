FROM node:20-alpine AS base
WORKDIR /repo

COPY package.json package-lock.json turbo.json ./
COPY apps ./apps
COPY packages ./packages

RUN npm install

FROM base AS dev
WORKDIR /repo
EXPOSE 3000
CMD ["npm", "run", "dev", "--workspace", "@bizpilothub/web"]

FROM base AS build
WORKDIR /repo
RUN npm run build --workspace @bizpilothub/web

FROM nginx:1.27-alpine AS runner
COPY --from=build /repo/apps/web/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]