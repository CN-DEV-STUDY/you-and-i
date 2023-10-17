FROM node:18.15.0-slim as builder

WORKDIR /app

COPY ./package.json .

COPY yarn.lock .

RUN yarn

COPY . .

RUN yarn run build --force

FROM nginx
EXPOSE 80
COPY --from=builder /app/dist /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf

# container 실행 시 자동으로 실행할 command. nginx 시작함
CMD ["nginx", "-g", "daemon off;"]