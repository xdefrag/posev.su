FROM node:9-alpine

RUN apk add --no-cache git && \
      mkdir /opt/frontend

WORKDIR /opt/frontend

COPY . .

RUN npm i && \
      npx next build

CMD npx next start
