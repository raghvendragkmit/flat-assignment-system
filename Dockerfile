FROM node:16


# Create app directory
WORKDIR /usr/src/app



# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./


RUN npm install express nodemon jsonwebtoken express-jwt cookie-parser cors body-parser dotenv bcrypt bcryptjs mysql hbs url


# Bundle app source
COPY . .


EXPOSE 6060


CMD [ "npm", "start" ]