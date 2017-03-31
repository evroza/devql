require('babel-polyfill');

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  apiHost: process.env.APIHOST || 'localhost',
  apiPort: process.env.APIPORT,
  app: {
    title: 'DevQL Home - Evans R.',
    description: 'SELECT *  FROM DevPool WHERE humour = true AND skill = 1000 LIMIT 1',
    head: {
      titleTemplate: 'DevQL: %s',
      meta: [
        {name: 'description', content: 'My hangout.'},
        {charset: 'utf-8'},
        {property: 'og:site_name', content: 'A Software Engineer'},
        {property: 'og:image', content: 'https://react-redux.herokuapp.com/logo.jpg'},
        {property: 'og:locale', content: 'en_US'},
        {property: 'og:title', content: 'A Software Engineer..'},
        {property: 'og:description', content: 'A Software Engineer.'},
        {property: 'og:card', content: 'A Software Engineer.....'},
        {property: 'og:site', content: '@devql'},
        {property: 'og:creator', content: '@devql'},
        {property: 'og:image:width', content: '200'},
        {property: 'og:image:height', content: '200'}
      ]
    }
  },

}, environment);
