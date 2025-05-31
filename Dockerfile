FROM node:20-alpine AS builder

WORKDIR /app

COPY backend/package*.json ./backend/
WORKDIR /app/backend
RUN npm install

WORKDIR /app
COPY /backend ./backend/         
COPY /client ./client/

WORKDIR /app/client
RUN npm install \
    && npm run build

FROM node:20-alpine AS runner

WORKDIR /app


COPY --from=builder /app/backend ./
RUN npm install --production \
    && npx sequelize db:migrate \
    && npx sequelize db:seed:all || true

EXPOSE 3000

CMD ["node", "server.js"]
