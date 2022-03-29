import React from "react";
import styled from "styled-components";
import { images } from "../../constants";

const Container = styled.div``;

const SubHeading = ({ title }) => (
  <Container style={{ marginBottom: "1rem" }}>
    <p className="p__cormorant">{title}</p>
    <img src={images.spoon} alt="spoon" className="spoon__img " />
  </Container>
);

export default SubHeading;
