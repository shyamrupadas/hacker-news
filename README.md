<p align="center">
  <a href="https://github.com/shyamrupadas/hacker-news/actions/workflows/main.yml">
    <img src="https://github.com/shyamrupadas/hacker-news/actions/workflows/main.yml/badge.svg">
  </a>
  <a href="https://github.com/prettier/prettier">
    <img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square">
</p>

# Hacker news clone

## Test task for Avito

Demo: https://hacker-news-sh.herokuapp.com/

## Available Scripts

### Start in development mode

Frontend will be available on http://127.0.0.1:3000/ <br />
Backend will be available on http://127.0.0.1:5000/

```
yarn start
```

### Build and preview in production mode

Production preview will be available on http://127.0.0.1:3000/

```
yarn build && yarn preview
```

### Start frontend tests

```
yarn test
```

## Продуктовые требования 

- Разработать пользовательский интерфейс для портала [hacker news](https://news.ycombinator.com/) 
- Отображается последние 100 новостей портала.
- По клику на новость происходит переход на страницу новости
- При клике на статью открывается дерево комментариев.
комментарии верхнего уровня развернуты, остальные свернуты.
при клике по комментарию разворачиваются вложенные комментарии.
- Каждую минуту автоматически обновляется список новостей / комментариев,
и пользователь может обновить их принудительно.
- Время создания статьи или комментария отображается в формате "7 minutes ago" / "about 1 hour ago"

## Технические требования
- Стек Typescript, React и Redux
- Использован официальный API Hacker News: https://github.com/hackernews/api
- Бэкенд для хостинга статики и API для инкапсуляции внешних запросов на Node.JS
- Покрытие кода юнит-тестами
