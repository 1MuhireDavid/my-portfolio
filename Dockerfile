FROM node:18-alpine

ENV NODE_ENV=production

WORKDIR /src/app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3001

CMD [ "npm", "start" ]