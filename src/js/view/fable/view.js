import template from './template.handlebars';
import { getFable } from '../../data/dao.js';
import page from 'page';
import listenView from './listen/view.js';

function render(el, context) {
    getFable(context.params.id)
        .then(fable => {
            el.innerHTML = template(fable);
            bindEventListeners(el);
            renderListenView(el, fable);
        });
}

function bindEventListeners(el) {
    el.getElementsByClassName('js-back-button')[0].addEventListener('click', () => page('/overview'));
}

function renderListenView(el, fable) {
    const langElement = el.getElementsByClassName('js-listen')[0];
    listenView(langElement, fable);
}

export default render;
