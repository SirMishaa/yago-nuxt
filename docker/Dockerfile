FROM node:18-alpine as builder
ARG BUILDING_ENV

RUN apk --update add rsync \
    && rm -rf /var/cache/apk/* \
    && wget -qO /bin/pnpm "https://github.com/pnpm/pnpm/releases/latest/download/pnpm-linuxstatic-x64" \
    && chmod +x /bin/pnpm

# Here, we install depedenencies in a separate folder because we gonna rsync the folder later on running the container (to have good experience with IDEs)
RUN mkdir /tmp/app
WORKDIR /tmp/app
COPY .npmrc package.json pnpm-lock.yaml ./

# Unfortunatelly, we do need the "--shamefully-hoist" flag even if it's discouraged
# FIXME: See https://github.com/nuxt/framework/issues/5411 and remove the flag when it's fixed
RUN if [ "$BUILDING_ENV" = "production" ]; then \
        echo "Installing production dependencies" \
        && pnpm install --frozen-lockfile --prod --shamefully-hoist; \
    else \
        echo "Installing development dependencies" \
        && pnpm install --no-frozen-lockfile --shamefully-hoist; \
    fi

FROM builder as development
WORKDIR /app

COPY . .
RUN chmod +x ./docker/entrypoint.sh
CMD ["ash", "./docker/entrypoint.sh"]


FROM node:18-alpine as runner
RUN wget -qO /bin/pnpm "https://github.com/pnpm/pnpm/releases/latest/download/pnpm-linuxstatic-x64" \
    && chmod +x /bin/pnpm

WORKDIR /app

COPY --from=builder /tmp/app/node_modules /app
COPY . .
RUN pnpm run build
