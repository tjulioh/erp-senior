FROM node:latest AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
FROM nginx:latest
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/erp-senior/browser /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
