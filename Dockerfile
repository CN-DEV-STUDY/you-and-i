FROM node:18.15.0-slim as builder

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn

COPY . .

RUN yarn run build

FROM nginx
COPY --from=builder /app/dist /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
# container 실행 시 자동으로 실행할 command. nginx 시작함
CMD ["nginx", "-g", "daemon off;"]
