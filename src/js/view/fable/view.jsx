import template from './template.handlebars';
import { getFable } from '../../data/dao.js';
import page from 'page';
import listenView from './listen/view.jsx';
import Loader from '../../components/Loader.jsx';
import artistDescriptionView from './artistDescription/view.js';
import React from 'react';
import ReactDOM from 'react-dom';


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
        ReactDOM.render(<Loader/>, el);
        page('/overview');
    });
}

function renderListenView(el, fable) {
    const langElement = el.getElementsByClassName('js-listen')[0];
    listenView(langElement, fable);
}

export default render;
