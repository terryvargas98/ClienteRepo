FROM node:stretch-slim
RUN mkdir -p /api
WORKDIR /api
COPY package*.json ./
RUN npm install 
COPY . . 
EXPOSE 5000 
CMD ["npm","start"]