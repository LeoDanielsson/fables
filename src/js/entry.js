import 'babel-polyfill';

import '../../node_modules/materialize-css/dist/css/materialize.min.css';
import '../css/style.css';

import layout from './layout.handlebars';
import initRouter from './router.js';

document.write(layout());

initRouter(document.getElementById('content'));
