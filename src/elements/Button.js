import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const { text, _onClick } = props;
  return (
    <React.Fragment>
      <TagButton onClick={_onClick}>{text}</TagButton>
    </React.Fragment>
  );
};

const TagButton = styled.button`
  width: 100%;
  background-color: #868b8e;
  color: #ffffff;
  padding: 12px 0px;

  box-sizing: border-box;
  border: none;
`;

Button.defaultProps = {
  text: "텍스트",
  _onClick: () => {},
};

export default Button;
