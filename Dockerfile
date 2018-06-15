FROM mhart/alpine-node:latest

WORKDIR /app
COPY . .

RUN yarn install --production

EXPOSE 3000 80
CMD ["yarn", "start"]