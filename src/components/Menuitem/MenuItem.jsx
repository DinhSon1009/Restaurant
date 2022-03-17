import React from "react";
import styled from "styled-components";

import "./MenuItem.css";

const Wrapper = styled.div`
  width: 100%;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Bottom = styled.div`
  width: 100%;
  margin-top: 0.2rem;
`;

const Content = styled.p`
  color: rgb(170, 170, 170);
`;

const Title = styled.h1`
  color: rgb(220, 202, 135);
`;

const Left = styled.div`
  flex: 1;
`;

const Line = styled.div`
  width: 90px;
  height: 1px;
  background: var(--color-golden);
  margin: 0 1rem;
`;

const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

const Price = styled.p``;

const MenuItem = ({ title, content, price }) => (
  <Wrapper>
    <Top>
      <Left>
        <Title className="p__cormorant">{title}</Title>
      </Left>
      <Line></Line>
      <Right>
        <Price className="p__cormorant">{price}</Price>
      </Right>
    </Top>
    <Bottom>
      <Content className="p__opensans">{content}</Content>
    </Bottom>
  </Wrapper>
);

export default MenuItem;
