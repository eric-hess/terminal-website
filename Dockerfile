FROM node:current-alpine AS node

COPY ./package.json /app/package.json
COPY ./package-lock.json /app/package-lock.json
COPY ./tsconfig.json /app/tsconfig.json
COPY ./src /app/src
COPY ./public /app/public

WORKDIR /app

ENV NODE_OPTIONS=--openssl-legacy-provider

RUN npm ci
RUN npm run build

FROM alpine:3.16

RUN apk upgrade --no-cache && apk add --no-cache \
    bash \
    nginx \
    supervisor

COPY docker/nginx.ini /etc/supervisor.d/nginx.ini
COPY docker/nginx.conf /etc/nginx/http.d/default.conf

COPY --from=node /app/build /opt/terminal

CMD [ "supervisord", "-n", "-c", "/etc/supervisord.conf" ]
