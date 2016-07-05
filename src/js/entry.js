import '../../node_modules/materialize-css/dist/css/materialize.min.css';
import cardsView from './view/cards.js';
import data from '../../data/fables.json';
import layout from './layout.handlebars';

console.log('data:', data);

const appElement = document.getElementById('app');
appElement.innerHTML = layout();

const fablesElement = appElement.getElementsByClassName('js-fables')[0];
cardsView(fablesElement, data);
