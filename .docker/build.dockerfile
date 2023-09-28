FROM node:16

WORKDIR /usr/app

COPY package*.json ./
COPY ./backend ./backend
COPY ./frontend ./frontend

RUN apk update
RUN npm install

RUN npm run be-build
RUN npm run fe-build 

EXPOSE 3000
EXPOSE 8000

CMD npm run be-start & npm run fe-start

