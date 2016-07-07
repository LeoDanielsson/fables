import template from './template.handlebars';
import { getFable } from '../../service/fableService.js';

function render(el, context) {
    el.innerHTML = template(getFable(context.params.id));
}

export default render;
