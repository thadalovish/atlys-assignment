import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "components/common/style-components/Button";

const Forbidden = ({ title, subTitle }: any) => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>{title}</h1>
      <p>{subTitle}</p>
      <Button
        type="submit"
        value="Submit"
        style={{
          width: "100%",
          height: "43px",
          fontSize: "16px",
          fontWeight: "500",
          lineHeight: "19.36px",
          borderRadius: "4px",
        }}
        handleClick={() => {
          navigate("/");
        }}
      >
        Home
      </Button>
    </div>
  );
};

export default Forbidden;
