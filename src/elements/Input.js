import React from "react";
import styled from "styled-components";
import Text from "./Text";
import Grid from "./Grid";

const Input = (props) => {
  const { label, placeholder, _onChange, type } = props;
  return (
    <React.Fragment>
      <Grid>
        <Text margin="0px">{label}</Text>
        <TagInput type={type} placeholder={placeholder} onChange={_onChange} />
      </Grid>
    </React.Fragment>
  );
};

const TagInput = styled.input`
  border: 1px solid #b9b7bd;
  width: 100%;
  padding: 12px 4px;
  box-sizing: border-box;
`;

Input.defaultProps = {
  label: "텍스트",
  placeholder: "텍스트를 입력하세요",
  _onChange: () => {},
  type: "text",
};

export default Input;
