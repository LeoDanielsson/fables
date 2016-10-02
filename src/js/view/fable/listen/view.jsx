import React from 'react';
import ReactDOM from 'react-dom';

import page from 'page';
import { getLanguages } from '../../../data/dao.js';
import selectLanguageTemplate from './selectLanguage.handlebars';
import Audio from '../../../components/Audio.jsx';
import _ from 'lodash';

function render(el, fable) {
    getLanguages()
        .then(languages => {
            el.innerHTML = selectLanguageTemplate(_.pick(languages, Object.keys(fable.audio)));
            bindEventListeners(el, languages, fable);
        });
}

function bindEventListeners(el, languages, fable) {
    Array.from(el.getElementsByClassName('js-language-button')).forEach(button => button.addEventListener('click', event => {
        console.log('lang: ', event.target.dataset.language);
        renderAudioView(el, fable.audio[event.target.dataset.language]);
    }));
}

function renderAudioView(el, audioUrl) {
    ReactDOM.render(<Audio url={ audioUrl }/>, el.getElementsByClassName('audio-player')[0]);
    el.getElementsByTagName('audio')[0].addEventListener('ended', () => page('/overview'));
}

export default render;
