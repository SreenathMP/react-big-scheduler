import React from "react";
import styled from "styled-components";
import images from "../config/images";

const StyledImage = styled.img`
  max-height: ${(props) => (props.height ? props.height : "100%")};
  max-width: ${(props) => (props.width ? props.width : "100%")};
  opacity: ${(props) => (props.src !== images.icons.logoSmall ? 1 : 0.5)};
  filter: ${(props) =>
    props.src !== images.icons.logoSmall ? "grayscale(0%)" : "grayscale(100%)"};
  object-fit: cover;
`;

const Container = styled.div`
  display: inline-block;
  cursor: ${(props) => (props.cursor ? props.cursor : "pointer")};
  width: ${(props) => (props.width ? props.width : "100%")};
`;

const Image = (props) => {
  return (
    <Container width={props.width} cursor={props.cursor}>
      <StyledImage
        {...props}
        className="lozad"
        src={props.src || images.icons.logoSmall}
      />
    </Container>
  );
};

export default Image;
