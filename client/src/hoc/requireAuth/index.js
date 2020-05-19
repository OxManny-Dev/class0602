import React, { Component } from 'react';
import { connect } from 'react-redux';

export default (ChildComponent) => {
  class ComposedComponent extends Component {
    // After the component renders on the page
    componentDidMount() {
      this.shouldNavigateAway();
    }
    // After the component has update it's state
    componentDidUpdate() {
      this.shouldNavigateAway();
    }
    shouldNavigateAway() {
      if(!this.props.authenticated) {
        this.props.history.push('/');
      }
    }
    render() {
      return <ChildComponent {...this.props}/>
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
  }
  return connect(mapStateToProps)(ComposedComponent);
}
