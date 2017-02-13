import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../actions';

function Modal({ isOpen, text, closeModal }) {
  if (isOpen) {
    return (
        <div className="info-modal">
            <p>{text}</p>
            <button className="mdl-button mdl-button--raised" onClick={closeModal}>Stäng</button>
        </div>
    );
  }
  return null;
}

function mapStateToProps(state) {
  return {
    isOpen: state.modal.isOpen,
    text: state.modal.text
  }
}

export default connect(mapStateToProps, { closeModal })(Modal);
