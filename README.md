
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

The application is designed to store information about movies, add new movies, delete movies and search for movies by name and actors.

To create an application, I used the following technologies:
1. React for graphical representation.
2. Redux Express to control
application states
3. MongoDB for data storage

Global state of the application is changed using Redux through the server
In order for the data to be saved after the server restart, I use mLAB

To represent this, I built a UML diagram
![alt-текст](https://github.com/PovDima/WebbyLab-test/master/usecase.jpg)
