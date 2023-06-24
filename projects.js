const projects = [
  {
    url: 'https://gunesozdogan.github.io/todo-app/',
    repo: 'https://github.com/gunesozdogan/todo-app',
    name: 'Todo-App',
    img: 'https://github.com/gunesozdogan/todo-app/raw/main/dist/icons/ss3.png',
  },
  {
    url: 'https://gunesozdogan.github.io/weather-app/',
    repo: 'https://github.com/gunesozdogan/weather-app',
    name: 'Weather-App',
    img: 'https://github.com/gunesozdogan/weather-app/raw/main/dist/img/ss.png',
  },
  {
    url: 'https://gunesozdogan.github.io/memory-card-game/',
    repo: 'https://github.com/gunesozdogan/memory-card-game',
    name: 'Warcraft Card Game',
    img: 'https://github.com/gunesozdogan/memory-card-game/raw/main/public/ss.png',
  },
  {
    url: 'https://gunesozdogan.github.io/shopping-cart',
    repo: 'https://github.com/gunesozdogan/shopping-cart',
    name: 'Game Field',
    img: 'https://github.com/gunesozdogan/shopping-cart/raw/main/public/ss2.png',
  },
  {
    url: 'https://gunesozdogan.github.io/vehicle-control-system/',
    repo: 'https://github.com/gunesozdogan/vehicle-control-system',
    name: 'Vehicle Control System',
    img: 'https://github.com/gunesozdogan/vehicle-control-system/raw/main/src/img/ss3.png',
  },
  {
    url: 'https://gunesozdogan.github.io/cv-application/',
    repo: 'https://github.com/gunesozdogan/cv-application',
    name: 'Resume Creator',
    img: 'https://github.com/gunesozdogan/cv-application/raw/main/src/img/ss1.png',
  },
];

const response = await fetch(
  'https://portfolio-83517-default-rtdb.firebaseio.com/projects.json',
  {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(projects),
  }
);
