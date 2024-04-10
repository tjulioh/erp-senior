FROM node:lts
WORKDIR /usr/src/app
RUN npm install -g @angular/cli
COPY . .
RUN npm install --quiet
ENTRYPOINT ["npm", "start"]
