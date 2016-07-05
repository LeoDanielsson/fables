import template from './card.handlebars';

function render(element) {
    element.innerHTML = template();
}

export default render;
