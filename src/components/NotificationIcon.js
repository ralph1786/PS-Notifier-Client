import React from "react";
import "./NotificationIcon.css";
import { connect } from "react-redux";
import { openModal } from "../reduxStore/actions/actions";

function NotificationIcon(props) {
  return (
    <div>
      <button onClick={props.openModal} className="notification_icon">
        {props.content === null ? 0 : 2}
      </button>
    </div>
  );
}

const mapStateToProps = state => ({
  content: state.content
});

const mapDispatchToProps = dispatch => ({
  openModal: () => dispatch(openModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotificationIcon);
