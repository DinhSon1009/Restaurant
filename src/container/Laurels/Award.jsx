import React from "react";
import styled from "styled-components";

const Award = ({ item }) => {
  const Item = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 1rem;
    flex: 1;
    min-width: 230px;
  `;

  const Image = styled.img`
    display: block;
    width: 50px;
    height: 50px;
  
  `;

  const Content = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
  `;

  const Title = styled.h1`
    color: rgb(220, 202, 135);
  `;

  const SubTitle = styled.p``;

  return (
    <Item>
      <Image src={item.imgUrl} alt="award" />
      <Content>
        <Title className="p__cormorant">{item.title}</Title>
        <SubTitle className="p__opensans">{item.subtitle}</SubTitle>
      </Content>
    </Item>
  );
};

export default Award;
