FROM node:16

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run be-build
RUN npm run fe-build 

EXPOSE 3000
EXPOSE 8000

CMD npm run be-start & npm run fe-start

