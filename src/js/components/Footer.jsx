import React from 'react';
import { connect } from 'react-redux';
import FullscreenButton from './FullscreenButton';

function Footer({ hidden }) {
    return hidden ? null : (
        <div className="footer">
            <p>En utställning av <a href="http://www.renqvistsverkstad.se">Renqvists Verkstad</a></p>
            <p>App utvecklad av Leo Danielsson</p>
            <p><a href="https://github.com/LugoMoll/fables">Öppen källkod på GitHub</a></p>
            <FullscreenButton />
        </div>
    );
}

function mapStateToProps(state) {
    return {
        hidden: state.fables.isFetching
    }
}

export default connect(mapStateToProps)(Footer);
