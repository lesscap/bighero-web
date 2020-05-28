# - stage 1: generate release

FROM qhwa/elixir-builder:latest AS builder

ARG app_vsn
ARG app_revision
ARG mix_env=prod
ARG hex_mirror_url=https://hexpm.upyun.com
ARG oss_access_key_id
ARG oss_access_key_secret

ENV REPLACE_OS_VARS=true \
    APP_VSN=${app_vsn} \
    NODE_ENV=${mix_env} \
    MIX_ENV=${mix_env} \
    HEX_MIRROR_URL=${hex_mirror_url} \
    APP_REVISION=${app_revision} \
    OSS_ACCESS_KEY_ID=${oss_access_key_id} \
    OSS_ACCESS_KEY_SECRET=${oss_access_key_secret}

WORKDIR /app/src

COPY mix.exs mix.lock /app/src/

RUN elixir -v

RUN mix deps.get --only $MIX_ENV
RUN mix deps.compile

ADD . .

# uncomment following line to enable digesting in Phoenix project
RUN yarn --cwd assets install --network-timeout 100000 --registry https://registry.npm.taobao.org
RUN yarn --cwd assets build
RUN mix phx.digest
RUN yarn --cwd assets upload

RUN mix release --path /app --quiet
RUN cd /app && rm -rf /app/src

# - stage 2: build final runner

FROM qhwa/elixir-runner:latest

ARG app_revision=latest
ARG mix_env=prod

ENV REPLACE_OS_VARS=true \
    MIX_ENV=${mix_env} \
    APP_REVISION=${app_revision}

COPY --from=builder /app /app
WORKDIR /app

ENTRYPOINT ["/app/bin/bighero"]
CMD ["start"]
