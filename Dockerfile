FROM node:15.12.0

WORKDIR /src

COPY package.json ./

RUN yarn

COPY . ./

EXPOSE 3000

CMD ["yarn", "start"]
