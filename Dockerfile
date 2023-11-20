FROM nginx:latest
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY src/ ./
COPY dist/ ./dist/
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
