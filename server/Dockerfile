FROM node:alpine
WORKDIR /app/server

COPY package.json .
RUN npm install
COPY . .
EXPOSE 5004
CMD ["npm","run","server"]