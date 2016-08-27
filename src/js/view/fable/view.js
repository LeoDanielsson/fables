import template from './template.handlebars';
import { getFable } from '../../data/dao.js';
import page from 'page';
import listenView from './listen/view.js';
import loaderView from '../loader/view.js';
import artistDescriptionView from './artistDescription/view.js';


function render(el, context) {
    getFable(context.params.id)
        .then(fable => {
            el.innerHTML = template(fable);
            bindEventListeners(el);
            renderListenView(el, fable);
            artistDescriptionView('artist-description', fable.artist);
        });
}

function bindEventListeners(el) {
    el.getElementsByClassName('js-back-button')[0].addEventListener('click', () => {
        loaderView(el);
        page('/overview');
    });
}

function renderListenView(el, fable) {
    const langElement = el.getElementsByClassName('js-listen')[0];
    listenView(langElement, fable);
}

export default render;
