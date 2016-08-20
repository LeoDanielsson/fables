import template from './template.handlebars';

function render(modalId, artist) {
    document.getElementById('content').insertAdjacentHTML('beforeend', template({modalId: modalId, artist: artist}));
    require('../../../../../node_modules/material-modal/src/js/material-modal.js');
}

export default render;
