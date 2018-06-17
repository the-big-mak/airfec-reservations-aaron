FROM node:boron

WORKDIR /src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3004

CMD [ "npm", "start" ]
