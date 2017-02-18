import '../../node_modules/material-design-lite/material.css';
import '../../node_modules/material-design-lite/material.js';
import '../css/style.css';
import React from 'react';
import { render } from 'react-dom';
import Root from './router';

render(
  <Root/>,
  document.getElementById('container')
);
