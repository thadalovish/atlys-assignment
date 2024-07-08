import React, { ReactNode } from "react";
import ErrorBoundary from "components/ErrorBoundary";

type IndexWrapperProps = { children: ReactNode };

const IndexWrapper = ({ children }: IndexWrapperProps) => {
  return <ErrorBoundary>{children}</ErrorBoundary>;
};

export default IndexWrapper;
