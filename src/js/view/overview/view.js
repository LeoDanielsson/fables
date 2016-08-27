import template from './template.handlebars';
import loaderView from '../loader/view.js';
import { getFables } from '../../data/dao.js';
import page from 'page';

function render(el) {
    loaderView(el);
    getFables()
        .then(fables => el.innerHTML = template(fables))
        .then(() => bindClickListeners(el));
}

function bindClickListeners(el) {
    Array.from(el.getElementsByClassName('js-card')).forEach(card => {
        card.addEventListener('click', () => {
            page(`/fable/${card.dataset.id}`);
        });
    });
}

export default render;
