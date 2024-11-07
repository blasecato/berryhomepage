#Stage 1
FROM node:21.7.3-alpine as stage1
WORKDIR /usr/src/app
COPY build/.env ./.env
COPY build/package.json build/package-lock.json ./
#ENV 

RUN npm ci

COPY build/ ./

RUN npm run build

CMD ["npm", "start"]
