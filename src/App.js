import React, { Fragment, Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import Avatar from "./components/Avatar";
import NotificationIcon from "./components/NotificationIcon";
import ModalContainer from "./containers/ModalContainer";
import { fetchContent } from "./reduxStore/actions/actions";

class App extends Component {
  componentDidMount() {
    this.props.fetchContent();
  }
  render() {
    return (
      <Fragment>
        <Avatar />
        <NotificationIcon />
        <ModalContainer />
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchContent: () => dispatch(fetchContent())
});

export default connect(
  null,
  mapDispatchToProps
)(App);
