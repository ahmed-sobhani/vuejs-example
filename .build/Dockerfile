FROM nginx:stable-alpine

COPY ./.build/nginx_default.conf  /etc/nginx/conf.d/default.conf

COPY --chown=nginx:nginx build /var/www
