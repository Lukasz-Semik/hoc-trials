import React, { Component } from 'react';

const HoCloader = (WrappedComponent) => {
  return class HoCloader extends Component {
    render() {
      return (!this.props.back_default) ?
        <div>Loader</div> : <WrappedComponent {...this.props}/>
    }
  }
};

export default HoCloader;
