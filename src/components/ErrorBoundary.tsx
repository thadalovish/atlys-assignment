import React, { PureComponent, ReactNode } from "react";
import Logger from "utils/Logger";
import Forbidden from "components/common/Forbidden";
import AppLayout from "./common/AppLayout";

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
        <AppLayout>
          <Forbidden
            title="Page Broken"
            subTitle="something went wrong , lovish got the update about this error , i am working on it."
          />
        </AppLayout>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
