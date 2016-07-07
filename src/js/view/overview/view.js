import template from './template.handlebars';
import page from 'page';
import { getFables } from '../../data/dao.js';

function render(el) {
    getFables().then(fables => el.innerHTML = template(fables));

    Array.from(el.getElementsByClassName('js-listen')).forEach(bindEventListener);
}

function bindEventListener(listenLink) {
    listenLink.addEventListener('click', (event) => {
        event.preventDefault();
        page(`/fable/${event.target.dataset.id}`);
    });
}

export default render;
