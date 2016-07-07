import template from './template.handlebars';
import page from 'page';
import { getFables } from '../../service/fableService.js';

function render(el) {
    el.innerHTML = template(getFables());

    Array.from(el.getElementsByClassName('js-listen')).forEach(bindEventListener);
}

function bindEventListener(listenLink) {
    listenLink.addEventListener('click', (event) => {
        event.preventDefault();
        page(`/fable/${event.target.dataset.id}`);
    });
}

export default render;
