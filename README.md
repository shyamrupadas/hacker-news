# Hacker news clone

## Test task for Avito

Demo: https://hacker-news-sh.herokuapp.com/

## Available Scripts

### Start in development mode
Frontend will be available on http://127.0.0.1:3000/ <br />
Backend will be available on http://127.0.0.1:5000/
```
yarn dev
```
### Start in production mode
Application will be available on http://127.0.0.1:5000/ 
```
yarn build && yarn preview
```

## Реализованный функционал

Разработать пользовательский интерфейс для портала [Hacker News](https://news.ycombinator.com/) на базе Hacker News API: https://github.com/HackerNews/API

Отображается последние 100 новостей портала.

При клике на статью открывается дерево комментариев.
Комментарии верхнего уровня развернуты, остальные свернуты.
При клике по комментарию разворачиваются вложенные комментарии.

Каждую минуту автоматически обновляется список новостей / комментариев,
и пользователь может обновить их принудительно.

Время создания статьи или комментария отображается в формате "7 minutes ago" / "about 1 hour ago"
