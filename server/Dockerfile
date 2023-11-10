# Используйте offical Node.js образ как базовый
FROM node:16-alpine

# Устанавливаем зависимости и копируем приложение
WORKDIR /usr/src/app
COPY package*.json ./
RUN yarn install
COPY . .

# Устанавливаем рабочую директорию для запуска приложения
WORKDIR /usr/src/app

# Команда для запуска приложения
CMD ["yarn", "start"]
