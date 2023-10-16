FROM node:18-alpine3.17 as builder
WORKDIR /app
COPY ./package.json .
RUN yarn
COPY . .
RUN yarn run build

#FROM ubuntu
#RUN apt-get update
#RUN apt-get install -y nginx
#
#COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
#COPY --from=builder /app/build /usr/share/nginx/html
#
#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]

FROM nginx
EXPOSE 5173
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html
