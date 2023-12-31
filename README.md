## Инструкция по использованию

### Описание

Стек технологий при разработке:
- Front: React + typeScript + Redux\Redux Toolkit
- Styles: Sass / module components
- Back: node.js + express + MongoDB

## Инструкция по клонированию репозитория

- Откройте командную строку или терминал на вашем компьютере и перейдите в каталог, где вы хотите сохранить репозиторий.
- Выполните следующую команду:

```sh
git clone https://github.com/hardMode551/My_Diary_App.git
```

## Установка зависимостей

Перед началом использования программы, убедитесь, что у вас установлена последняя версия Node.js.

Для установки необходимых зависимостей выполните следующую команду с использованием Yarn:

```sh
yarn add
```

## Запуск докером

Образ на docker hub: https://hub.docker.com/u/sergey432

Для запуска локально выполните следующие команды:

- Запустите docker

Перейдите в корневую директорию, затем запустите проект командой:


```sh
docker-compose up
```

## Запуск сервера (Отдельно)

Для запуска сервера выполните следующие команды:

Перейдите в директорию сервера:

```sh
cd server
```

Затем запустите сервер командой:

```sh
yarn start
```

## Запуск клиента (Отдельно)

Перейдите в директорию клиента:

```sh
cd client
```

Для запуска клиента выполните следующую команду:

```sh
yarn dev
```
