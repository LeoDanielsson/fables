import template from './template.handlebars';
import { getFable } from '../../data/dao.js';
import page from 'page';

function render(el, context) {
    getFable(context.params.id)
        .then(fable => el.innerHTML = template(fable))
        .then(() => bindEventListeners(el));
}

function bindEventListeners(el) {
    el.getElementsByClassName('js-back-button')[0].addEventListener('click', () => page('/overview'));
}

export default render;
