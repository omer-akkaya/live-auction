FROM node:17-alpine as builder
WORKDIR /app
COPY package.json . 
COPY package-lock.json .
RUN npm install
COPY . .
EXPOSE 3000 
CMD ["npm","run","dev"] 
