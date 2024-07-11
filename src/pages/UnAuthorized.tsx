import React from "react";
import Forbidden from "components/common/Forbidden";

const UnAuthorized = () => {
  return (
    <Forbidden
      title="Unauthorized"
      subTitle="You do not have permission to view this page."
    />
  );
};

export default UnAuthorized;
