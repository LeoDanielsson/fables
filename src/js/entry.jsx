import '../../node_modules/material-design-lite/material.min.css';
import '../../node_modules/material-design-lite/material.min.js';
import '../../lib/material-icons.css';
import '../../node_modules/material-modal/dist/css/material-modal.min.css';
import '../css/style.css';
import React from 'react';
import { render } from 'react-dom';
import Root from './router.js';

render(
  <Root/>,
  document.getElementById('container')
);
