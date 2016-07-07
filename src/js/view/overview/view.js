import template from './template.handlebars';
import { getFables } from '../../data/dao.js';

function render(el) {
    getFables().then(fables => el.innerHTML = template(fables));
}

export default render;
