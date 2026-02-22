# Stage 1: Build the React application
FROM node:18-alpine AS builder
WORKDIR /app
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ .
ARG VITE_TRIPOSR_UI_URL=http://localhost:7860
ENV VITE_TRIPOSR_UI_URL=$VITE_TRIPOSR_UI_URL
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:stable-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY frontend/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
