FROM node:20.11

WORKDIR /app

COPY ./nest-testing/ /app

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]