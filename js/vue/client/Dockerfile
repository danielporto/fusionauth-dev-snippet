FROM node:14.15.5-buster-slim 

RUN apt update && apt install -y git python make g++ && apt clean all
RUN npm install -g npm@7.5.4 

WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install -g --quiet
COPY . .
