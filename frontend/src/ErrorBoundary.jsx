import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    // You can log the error or handle it in other ways here.
  }

  render() {
    if (this.state.hasError) {
      // Render an error message or fallback UI when an error occurs.
      return <div>Something went wrong!</div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
