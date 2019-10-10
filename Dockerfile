FROM nginx:1.9
ADD default.conf /etc/nginx/conf.d/
WORKDIR /usr/share/nginx/html
RUN rm -rf *
COPY dist ./
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]