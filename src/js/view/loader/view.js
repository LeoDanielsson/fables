import template from './template.handlebars';

function render(el) {
    el.innerHTML = template();
    componentHandler.upgradeDom();
}

export default render;
