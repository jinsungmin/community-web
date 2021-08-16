# STAGE 1

FROM node:14-alpine AS build

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . /app

RUN npm run build

# STAGE 2

FROM nginx:stable-alpine

COPY --from=build /app/build /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]