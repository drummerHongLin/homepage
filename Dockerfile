FROM node:17 as builder
WORKDIR /app
COPY . /app


RUN npm i && npm run build

FROM nginx:stable-alpine
COPY --from=builder /app/dist /usr/share/nginx/html

ADD default.conf /etc/nginx/conf.d/

EXPOSE 80

WORKDIR /usr/share/nginx/html

RUN chmod -R a+rx *
