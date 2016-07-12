import page from 'page';
import { getLanguages } from '../../../data/dao.js';
import selectLanguageTemplate from './selectLanguage.handlebars';
import audioTemplate from './audio.handlebars';

function render(el, fable) {
    getLanguages()
        .then(languages => {
            el.innerHTML = selectLanguageTemplate(languages);
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
    el.getElementsByClassName('audio-player')[0].innerHTML = audioTemplate(audioUrl);
    el.getElementsByTagName('audio')[0].addEventListener('ended', () => page('/overview'));
}

export default render;
