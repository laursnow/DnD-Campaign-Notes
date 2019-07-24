import React from "react";
import { connect } from "react-redux";

export default () => Component => {
  const Protected = (props) => {
      if (this.props.isLoggedIn) {
    return <Component {...props} />;
      }
    else {
        // <Login />
        // redirect?
    }
  }
  const displayName = Component.displayName || Component.name || "Component";
  Protected.displayName = `Protected(${displayName})`;

  const mapStateToProps = (state) => ({
    isLoggedIn: state.isLoggedIn
  });

  return connect(mapStateToProps)(Protected);
};
