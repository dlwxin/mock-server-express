FROM node:14.4.0
COPY . /app
WORKDIR /app
RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm \
    && pnpm install 
EXPOSE 3000
CMD pnpm start
 
