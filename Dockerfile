FROM nginx:1.9
WORKDIR /usr/share/nginx/html
COPY dist ./
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]