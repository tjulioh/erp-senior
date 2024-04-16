FROM node:alpine AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/erp-senior/browser /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
