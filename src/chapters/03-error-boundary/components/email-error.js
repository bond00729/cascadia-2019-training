import React, { Component } from "react";

import Modal from "./modal";

export default class EmailError extends Component {
  state = {
    renderError: false
  }

  componentDidCatch(error, { componentStack }) {
    console.log('There was an error:')
    console.log(error);
    console.log('stack trace:');
    console.log(componentStack);
  }

  static getDerivedStateFromError() {  
    return { renderError: true };
  }

  handleClose = () => {
    this.props.removeBadEmail();

    this.setState({ renderError: false });
  }

  render() {
    const { renderError } = this.state;
    const { children } = this.props;
  
    if (renderError) {
      return <Modal onClose={this.handleClose} />
    }

    return children;
  }
}