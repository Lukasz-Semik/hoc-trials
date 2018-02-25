import React, { Component } from 'react';

const HoCSwitch = (WrappedComponent) => {
  return class HoCSwitch extends Component {
    render() {
      let text = 'Nope, component is Off';
      if (this.props.isOn) text = "Yep! Component is ON!";
      return (
        <WrappedComponent {...this.props} text={text} />
      );
    }
  }
}

export default HoCSwitch;
