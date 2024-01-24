FROM node as builder
WORKDIR /app
COPY . .
RUN npm install --force --only=prod
RUN npm run build
FROM nginx
COPY --from=builder /app/dist /usr/share/nginx/html
COPY --from=builder /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8000
CMD ["nginx", "-g", "daemon off;"]