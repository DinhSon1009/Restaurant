import React from "react";
import "./SpecialMenu.css";
import styled from "styled-components";
import { MenuItem, SubHeading } from "../../components";
import { media } from "../../reponsive";
import { images } from "../../constants";
import { data } from "../../constants";

const SubContainer = styled.div`
  position: relative;
  padding: 4rem 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-black);
  flex-direction: column;
  ${media.tablet} {
    flex-direction: column;
    padding: 4rem 2rem;
  }
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  margin-bottom: 2rem;
  text-align: center;
`;

const Wrapper = styled.div`
  margin: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
  ${media.mobile} {
    width: 100%;
  }
  ${media.tablet} {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const Middle = styled.div`
  width: 410px;
  margin: 0 2rem;
  flex: 1;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  ${media.tablet} {
    margin-top: 3rem;
  }
`;

const Bottom = styled.div``;

const Button = styled.button``;

const MenuItems = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  width: 100%;
`;

const ItemTitle = styled.h1`
  font-family: var(--font-base);
  font-weight: 600;
  font-size: 45px;
  line-height: 58.5px;
  letter-spacing: 0.04em;
  color: var(--color-white);
`;

const Image = styled.img`
  width: 100%;
`;

const Heading = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SpecialMenu = () => (
  <SubContainer>
    <Top>
      <Heading>
        <p className="p__cormorant">Menu That Fits Your Palatte</p>
        <img src={images.spoon} alt="spoon" className="spoon__img " />
      </Heading>
      <Title className="headtext__cormorant">Today's Special</Title>
    </Top>
    <Wrapper>
      <Left>
        <ItemTitle>Wine & Beer</ItemTitle>
        <MenuItems>
          {data.wines.map((sp, index) => (
            <MenuItem key={index} sp={sp} />
          ))}
        </MenuItems>
      </Left>
      <Middle>
        <Image src={images.menu} alt="supply" />
      </Middle>
      <Right>
        <ItemTitle>Cocktails</ItemTitle>
        <MenuItems>
          {data.cocktails.map((sp, index) => (
            <MenuItem key={index} sp={sp} />
          ))}
        </MenuItems>
      </Right>
    </Wrapper>
    <Bottom>
      <Button type="button" className="custom__button">
        View More
      </Button>
    </Bottom>
  </SubContainer>
);

export default SpecialMenu;
