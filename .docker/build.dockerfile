FROM node:16

COPY ./static /usr/static

WORKDIR /app

ENV uploadPath './frontend/public/uploads'

COPY package*.json /app/
RUN npm install

COPY ./frontend /app/frontend
COPY ./backend /app/backend


WORKDIR /app/frontend
RUN npm install & npm run build

WORKDIR /app/backend
RUN npm install & npm run build

EXPOSE 3000
EXPOSE 8000

WORKDIR /app

CMD npm run fe-start & npm run be-start
