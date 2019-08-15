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
        {this.props.content ? <NotificationIcon /> : null}
        <ModalContainer />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  content: state.content
});

const mapDispatchToProps = dispatch => ({
  fetchContent: () => dispatch(fetchContent())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
