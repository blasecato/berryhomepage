#Stage 1
#FROM node:12-alpine as stage1
FROM node:22.0.0-alpine as stage1
WORKDIR /usr/src/app
COPY build/.env ./.env
COPY build/package.json build/package-lock.json ./
#ENV 

RUN npm ci

COPY build/ ./

RUN npm run build

CMD ["npm", "start"]
