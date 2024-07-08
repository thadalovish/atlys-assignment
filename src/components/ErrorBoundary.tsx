import React, { PureComponent, ReactNode } from "react";
import Logger from "utils/Logger";
import Forbidden from "components/Forbidden";

class ErrorBoundary extends PureComponent<{ children?: ReactNode }> {
  state = { error: false };

  static getDerivedStateFromError() {
    return { error: true };
  }

  componentDidCatch(error: Error, errorInfo: any): void {
    Logger.logException(error, errorInfo);
  }

  render() {
    if (this.state.error) {
      return (
        <Forbidden
          title="Page Broken"
          subTitle="something went wrong , lovish got the update about this error , i am working on it."
        />
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
