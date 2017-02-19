import React from 'react';
import screenfull from 'screenfull';

function enterFullscreen() {
    if (screenfull.enabled) {
        screenfull.request();
    }
}

function FullscreenButton() {
    return (
        <button onClick={() => enterFullscreen()} className="mdl-button mdl-js-button fullscreen-button">
            <svg fill="#c6cdd0" height="36" viewBox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
            </svg>
        </button>
    );
}

export default FullscreenButton;
