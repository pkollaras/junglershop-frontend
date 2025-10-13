ARG NODE_VERSION=24.7.0

FROM node:${NODE_VERSION}-alpine

USER node

RUN mkdir -p /home/node/app && \
    mkdir -p /home/node/.local/share/corepack && \
    mkdir -p /home/node/.local/share/pnpm

ENV COREPACK_HOME="/home/node/.local/share/corepack"
ENV PNPM_HOME="/home/node/.local/share/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN corepack enable pnpm --install-directory /home/node/.local/share/pnpm

WORKDIR /home/node/app

COPY --chown=node:node . ./

RUN pnpm install --frozen-lockfile

RUN pnpm run build

ENTRYPOINT ["pnpm", "run", "start"]
