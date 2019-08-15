import React, { Fragment } from "react";
import "./ModalContainer.css";
import { connect } from "react-redux";
import Modal from "react-modal";
import { closeModal } from "../reduxStore/actions/actions";
import ReactMarkdown from "react-markdown";

function ModalContainer(props) {
  console.log(props.content);
  return (
    <Fragment>
      <Modal
        isOpen={props.isModalOpen}
        style={modalStyling}
        ariaHideApp={false}
      >
        <button className="btn_close" onClick={props.closeModal}>
          X
        </button>
        <ReactMarkdown source={props.content} className="markdown_container" />
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
    height: "800px",
    width: "800px",
    transform: "translate(-50%, -50%)",
    webkitboxShadow: "8px 9px 10px 4px rgba(119,116,116,0.75)",
    mozboxShadow: "8px 9px 10px 4px rgba(119,116,116,0.75)",
    boxShadow: "8px 9px 10px 4px rgba(119,116,116,0.75)",
    borderRadius: "15px"
  }
};

const mapStateToProps = state => {
  return {
    isModalOpen: state.isModalOpen,
    content: state.content
  };
};

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalContainer);
