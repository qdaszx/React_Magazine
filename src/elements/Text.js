import React from "react";
import styled from "styled-components";

const Text = (props) => {
  const { bold, color, size, children } = props;
  return (
    <React.Fragment>
      <P {...props}>{children}</P>
    </React.Fragment>
  );
};

const P = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold ? "600" : "400")};
`;

Text.defaultProps = {
  children: null,
  bold: false,
  color: "#222831",
  size: "14px",
};

export default Text;
