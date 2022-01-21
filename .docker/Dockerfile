FROM node:16-alpine as builder

WORKDIR /app
COPY . .

RUN npm i -g prisma && chmod 700 .docker/wait-for.sh && mv .env.prod .env
RUN yarn install \
    --prefer-offline \
    --frozen-lockfile \
    --non-interactive \
    --production=false
RUN yarn build

RUN rm -rf node_modules && \
  NODE_ENV=production yarn install \
  --prefer-offline \
  --pure-lockfile \
  --non-interactive \
  --production=true

FROM node:16-alpine
ARG db_service_host
ARG db_service_port
ENV db_host=${db_service_host}
ENV db_port=${db_service_port}

WORKDIR /app


COPY --from=builder /app  .

ENV HOST 0.0.0.0
EXPOSE 80

CMD .docker/wait-for.sh $db_host:$db_port -- npx prisma migrate dev && yarn start

