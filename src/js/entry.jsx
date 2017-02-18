import '../../node_modules/material-design-lite/material.min.css';
import '../../node_modules/material-design-lite/material.min.js';
import '../css/style.css';
import React from 'react';
import { render } from 'react-dom';
import Root from './router.js';

render(
  <Root/>,
  document.getElementById('container')
);
