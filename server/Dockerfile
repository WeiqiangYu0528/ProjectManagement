FROM node:16-buster

WORKDIR /app

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

RUN npm ci

COPY . /app

EXPOSE 5001

CMD [ "npm", "run", "start" ]