FROM debian:buster
RUN apt-get update
RUN apt-get install git nginx -y
RUN cd /var/www/html \
 && rm -rf ./* \
 && git clone https://github.com/vojkovic/GTB-Solver.git . \
 && chown -R www-data:www-data .
EXPOSE 80
CMD ["nginx","-g","daemon off;"]