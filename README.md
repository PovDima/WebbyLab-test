
## How to Install:
To install and launch project run these commands in console:
```
npm up
npm run client-install
npm run dev

```
To launch server run this command in console: 
```
npm run server
```

To launch client run this command in console: 
```
npm run client
```
## Architecture explanation

Приложение предназначено для хранения информации о фильмах, добавление новых фильмов, удаление фильмов и поиска фильмов по названию и актерам.

Для создание приложения я использовал такие технологии :
1. React для графического представления.
2. Redux Express для контроля 
состояния приложения
3. MongoDB для хранение данных 

Глобальное состояния приложение меняеться с помощью Redux через  сервер
Для того чтобы данные сохранялись после перезагрузки сервера я использую mLAB 

Для представление этого я построил диаграмму UML
![alt-текст](https://github.com/PovDima/WebbyLab-test/master/usecase.jpg)
