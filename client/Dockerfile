# Используйте offical Node.js образ как базовый
FROM node:16-alpine

# Устанавливаем зависимости и копируем приложение
WORKDIR /usr/src/app
COPY package*.json ./
RUN yarn install
COPY . .

# Собираем приложение
RUN yarn build

# Устанавливаем рабочую директорию для запуска приложения
WORKDIR /usr/src/app/build

# запускаем приложение
CMD ["yarn", "dev"]