import styled from "styled-components";
import React from "react";



// 이미지 컴포넌트
/**
 *
 * @param {*} props
 * - shape 이미지를 동그랗게 보여줄 지, 네모로 보여줄 지 모양을 결정합니다.
 * - src 이미지 경로
 * - size 이미지 사이즈
 * @returns
 */
const Image = (props) => {
  const { shape, src, size, display } = props;

  const styles = {
    src: src,
    size: size,
    display: display,
  };

  if (shape === "circle") {
    return <ImageCircle {...styles}></ImageCircle>;
  }

  if (shape === "rectangle") {
    return (
      <AspectOutter>
        <AspectInner {...styles}></AspectInner>
      </AspectOutter>
    );
  }

  if (shape === "logo") {
    return (
      <React.Fragment>
        <ImageDefault {...styles}></ImageDefault>
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <ImageDefault {...styles}></ImageDefault>
    </React.Fragment>
  )
};


Image.defaultProps = {
  shape: "cicle",
  src: "https://images.unsplash.com/photo-1591089627083-d9d049d833f9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
  size: 36,
};

const ImageDefault = styled.div`
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  background-image: url("${(props) => props.src}");
  background-size: cover;
  display: inline-block;
`;

const AspectOutter = styled.div`
  width: 100%;
  min-width: 250px;
`;

const AspectInner = styled.div`
  position: relative;
  padding-top: 75%;
  overflow: hidden;
  background-image: url("${(props) => props.src}");
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
