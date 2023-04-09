FROM node:18-buster

RUN npm install -g @angular/cli

WORKDIR /usr/src/app

# COPY package*.json ./

# RUN npm install

# RUN npm ci --only=production # If you are building your code for production

COPY . .

EXPOSE 4200

CMD ["npm", "run", "start"]