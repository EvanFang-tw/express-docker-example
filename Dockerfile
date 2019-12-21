FROM node:10-alpine

WORKDIR /home/app

# Intall dependencies
COPY app/package*.json ./
RUN npm install --only=production

# Bundle app source
COPY app/src/. ./src

EXPOSE 3000
CMD [ "npm", "start" ]
