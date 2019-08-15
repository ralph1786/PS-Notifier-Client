import React, { Fragment } from "react";
import { connect } from "react-redux";
import Modal from "react-modal";
import { closeModal } from "../reduxStore/actions/actions";

function ModalContainer(props) {
  return (
    <Fragment>
      <Modal
        isOpen={props.isModalOpen}
        // onRequestClose={this.closeModal}
        style={modalStyling}
        ariaHideApp={false}
      >
        <button onClick={props.closeModal}>X</button>
        <h2>Hello from modal</h2>
      </Modal>
    </Fragment>
  );
}

const modalStyling = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

const mapStateToProps = state => {
  return {
    isModalOpen: state.isModalOpen
  };
};

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalContainer);
