FROM node:18-alpine3.17 as builder
ARG VITE_REACT_APP_CLERK_PUBLISHABLE_KEY=\${{secrets.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY}}
ARG VITE_BASE_URL=\${{secrets.VITE_BASE_URL}}

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
EXPOSE 80
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html
