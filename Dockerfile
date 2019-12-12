FROM node:12.13-buster-slim as builder
LABEL stage=builder
RUN apt-get -y update
WORKDIR /app/crud-mongo
COPY package*.json ./
COPY ./src ./src
COPY tsconfig.json .
RUN npm i -s && npm run dist

FROM node:12.13-alpine
RUN mkdir -p /home/node/crud-mongo/node_modules && chown -R node:node /home/node/crud-mongo
WORKDIR /home/node/crud-mongo
COPY package*.json ./
COPY --from=builder /app/crud-mongo/dist ./dist
USER node
RUN npm i --production --no-optional -s
CMD ["node","./dist/index.js"]