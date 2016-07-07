import page from 'page';

import overviewView from './view/overview/view.js';
import fableView from './view/fable/view.js';

function init(el) {
    page('/overview', context => overviewView(el, context));
    page('/fable/:id', context => fableView(el, context));

    page.redirect('/', '/overview');

    page({ hashbang: true });
}

export default init;
