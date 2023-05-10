FROM node:18.16.0
COPY . /app
WORKDIR /app
RUN npm install -g pnpm@7.29.3 && pnpm install 
EXPOSE 3000
CMD pnpm start
 
