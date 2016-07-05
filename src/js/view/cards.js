import template from './cards.handlebars';

function render(el, data) {
    el.innerHTML = template(data);
}

export default render;
