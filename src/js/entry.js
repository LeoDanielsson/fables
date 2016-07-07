import 'babel-polyfill';

import '../../node_modules/materialize-css/dist/css/materialize.min.css';
import '../css/style.css';

import layout from './layout.handlebars';
import initRouter from './router.js';

const appElement = document.getElementById('app');
appElement.innerHTML = layout();

const contentElement = document.getElementById('content');

initRouter(contentElement);
