ARG NODE_VERSION=14.16.1

FROM node:$NODE_VERSION-alpine3.12 AS build

WORKDIR /app

COPY package*.json /app/

RUN npm install --production

COPY . /app/

RUN npm run build

FROM alpine:3.12

COPY --from=build /app /app

RUN apk add --no-cache rsync
