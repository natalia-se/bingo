FROM node:18-alpine

WORKDIR /bingo

COPY . .

CMD ["node", "index.js"]