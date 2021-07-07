import React from "react";
import styled from "styled-components";

const Image = (props) => {
  const { shape, src, size, src2 } = props;
  if (shape === "circle") {
    return <ImageCircle {...props}></ImageCircle>;
  }

  if (shape === "rectangle") {
    return (
      <Outter>
        <Inner {...props}></Inner>
      </Outter>
    );
  }
  return (
    <React.Fragment>
      <></>
    </React.Fragment>
  );
};

Image.defaultProps = {
  shape: "circle",
  src: "https://images.unsplash.com/photo-1536514215126-f2993bcf38f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1951&q=80",
  src2: "https://images.unsplash.com/photo-1625592729058-8338198122c1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  size: 36,
};

// 반응형이 되는 네모를 만들기
const Outter = styled.div`
  width: 100%;
  min-width: 250px;
`;

const Inner = styled.div`
  position: relative;
  padding-top: 75%;
  overflow: hidden;
  background-image: url("${(props) => props.src2}");
  background-size: cover;
`;

const ImageCircle = styled.div`
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  border-radius: var(--size);
  background-image: url("${(props) => props.src}");
  background-size: cover;
  margin: 4px;
`;

export default Image;