FROM node:alpine as builder
RUN npm install -g yarn

WORKDIR /app
COPY package.json .
RUN yarn
COPY ./ ./
RUN npm run build

FROM nginx
EXPOSE 80
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html