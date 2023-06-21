const skills = {
  techs: [
    {
      icon: 'https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/react-512.png',
      name: 'React',
    },
    {
      icon: 'https://cdn3.iconfinder.com/data/icons/teenyicons-solid-vol-3/15/typescript-256.png',
      name: 'Typescript',
    },
    {
      icon: 'https://cdn1.iconfinder.com/data/icons/ionicons-fill-vol-2/512/logo-javascript-256.png',
      name: 'Javascript',
    },
    {
      icon: 'https://cdn3.iconfinder.com/data/icons/teenyicons-solid-vol-2/15/nextjs-256.png',
      name: 'Next.js',
    },
    {
      icon: 'https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/redux-256.png',
      name: 'Redux.js',
    },
    {
      icon: 'https://img.uxwing.com/wp-content/themes/uxwing/download/web-app-development/rest-api-icon.svg',
      name: 'REST API',
    },
    {
      icon: 'https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/jest-256.png',
      name: 'Jest',
    },
    {
      icon: 'https://cdn3.iconfinder.com/data/icons/font-awesome-brands/512/git-square-256.png',
      name: 'Git',
    },
    {
      icon: 'https://cdn3.iconfinder.com/data/icons/teenyicons-outline-vol-2/15/npm-256.png',
      name: 'npm',
    },
    {
      icon: 'https://cdn3.iconfinder.com/data/icons/teenyicons-solid-vol-3/15/webpack-256.png',
      name: 'Webpack',
    },
    {
      icon: 'https://cdn0.iconfinder.com/data/icons/font-awesome-brands-vol-2/640/sass-256.png',
      name: 'SCSS/Sass',
    },
    {
      icon: 'https://cdn0.iconfinder.com/data/icons/logos-21/40/CSS3-256.png',
      name: 'CSS3',
    },
    {
      icon: 'https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/HTML5-512.png',
      name: 'HTML5',
    },
  ],
  tools: [
    {
      name: 'Scrum',
      icon: 'https://cdn1.iconfinder.com/data/icons/monocromatic-vol-1/128/scrum-256.png',
    },
    {
      name: 'Kanban',
      icon: 'https://cdn1.iconfinder.com/data/icons/bootstrap-fill-vol-2/16/kanban-fill-256.png',
    },
    {
      name: 'Jira',
      icon: 'https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/jira-256.png',
    },
    {
      name: 'Trello',
      icon: 'https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/trello-256.png',
    },
    {
      name: 'Confluence',
      icon: 'https://cdn0.iconfinder.com/data/icons/font-awesome-brands-vol-1/512/confluence-256.png',
    },
  ],
};

const response = await fetch(
  'https://portfolio-83517-default-rtdb.firebaseio.com/skills.json',
  {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(skills),
  }
);
