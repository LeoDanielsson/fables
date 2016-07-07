import template from './template.handlebars';
import { getFable } from '../../data/dao.js';

function render(el, context) {
    getFable(context.params.id).then(fable => el.innerHTML = template(fable));
}

export default render;
