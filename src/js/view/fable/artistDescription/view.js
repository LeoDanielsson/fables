import template from './template.handlebars';
import materialModal from '../../../../../lib/material-modal/src/js/material-modal.js';

function render(modalId, artist) {
    document.getElementById('content').insertAdjacentHTML('beforeend', template({modalId: modalId, artist: artist}));
    materialModal();
}

export default render;
