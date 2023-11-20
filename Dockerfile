FROM mirror.gcr.io/library/node:20.9.0-alpine AS builder

ARG VITE_RAPID_API_KEY
ARG VITE_CURRENT_WEATHER_API_KEY

ENV VITE_RAPID_API_KEY $VITE_RAPID_API_KEY
ENV VITE_CURRENT_WEATHER_API_KEY $VITE_CURRENT_WEATHER_API_KEY

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