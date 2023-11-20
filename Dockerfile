FROM mirror.gcr.io/library/node:20.9.0-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM mirror.gcr.io/library/nginx:alpine

RUN apk add --no-cache ca-certificates

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]