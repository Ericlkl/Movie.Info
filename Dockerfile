FROM node
WORKDIR /app

COPY . /app
RUN npm install
RUN npm run client-install
RUN npm run build

EXPOSE 5000

CMD npm run start