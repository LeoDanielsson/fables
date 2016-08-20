import 'babel-polyfill';

import '../../node_modules/material-design-lite/material.min.css';
import '../../node_modules/material-design-lite/material.min.js';
import '../../lib/material-icons.css';
import '../../node_modules/material-modal/dist/css/material-modal.min.css';
import '../css/style.css';

import layout from './layout.handlebars';
import initRouter from './router.js';

document.write(layout());

initRouter(document.getElementById('content'));
