FROM node:18.15.0-slim as builder
RUN npm install -g yarn@1.22.19 --force

WORKDIR /app
COPY . .
RUN yarn

RUN yarn run build --ignore-scripts

FROM nginx
EXPOSE 80
COPY --from=builder /app/dist /usr/share/nginx/html