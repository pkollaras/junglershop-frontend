ARG NODE_VERSION=24.7.0

FROM node:${NODE_VERSION}-alpine AS build

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN corepack enable pnpm

WORKDIR /app

COPY . .

ENV NODE_ENV=production \
    NODE_OPTIONS="--max-old-space-size=4096" \
    NUXT_HOST=0.0.0.0 \
    NUXT_PORT=3000 \
    NUXT_PUBLIC_APP_TITLE="Junglershop" \
    NUXT_SITE_DESCRIPTION="Next gen e-commerce solution" \
    NUXT_SITE_URL="https://shop.jungler.gr" \
    NUXT_PUBLIC_MEDIA_STREAM_ORIGIN="https://shop-assets.jungler.gr" \
    NUXT_PUBLIC_STATIC_ORIGIN="https://shop-static.jungler.gr"

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

RUN pnpm run build

FROM node:${NODE_VERSION}-alpine AS production

WORKDIR /app

COPY --from=build --chown=node:node /app/.output .
USER node

ENTRYPOINT ["node", "server/index.mjs"]
