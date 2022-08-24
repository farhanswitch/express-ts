FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app

COPY . .

RUN rm -rf node_modules && \
    npm i && \
    chown -R node:node /usr/src/app
EXPOSE 3000
USER node

CMD node build/index.js
