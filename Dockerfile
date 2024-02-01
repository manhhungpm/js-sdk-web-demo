FROM node:18-alpine as build

WORKDIR /app

COPY package.json yarn.lock ./
RUN apk add --no-cache git \
    && yarn install --frozen-lockfile \
    && yarn cache clean

COPY . .

RUN yarn build

CMD ["yarn", "start"]
