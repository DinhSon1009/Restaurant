import React from "react";
import styled from "styled-components";
import { SubHeading } from "../../components";

import { images } from "../../constants";
import { media } from "../../reponsive";

const HeaderContainer = styled.div`
  padding: 4rem 6rem;
  display: flex;
  background-color: var(--color-black);

  ${media.tablet} {
    flex-direction: column;
    padding: 4rem 0 4rem 4rem;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const Title = styled.h1`
  font-family: var(--font-base);
  color: var(--color-golden);
  letter-spacing: 0.04rem;
  text-transform: capitalize;
  line-height: 117px;
  font-size: 90px;
  ${media.mobile} {
    font-size: 50px;
    line-height: 70px;
  }
`;

const Paragraph = styled.p`
  margin: 2rem 0;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 2rem;
  ${media.tablet} {
    margin: 5rem 0 0;
  }
`;

const Image = styled.img`
  width: 100%;
`;

const Button = styled.button``;

const Header = () => (
  <HeaderContainer id="home">
    <Left className="header__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <Title>The Key To Fine Dining</Title>
      <Paragraph className="p__opensans">
        Sit Tellus Lobortis Sed Senectus Vivamus Molestie. Condimentum Volutpat
        Morbi Facilisis Quam Scelerisque Sapien. Et, Penatibus Aliquam Amet
        Tellus
      </Paragraph>
      <Button type="button" className="custom__button">
        Explore Menu
      </Button>
    </Left>
    <Right>
      <Image src={images.welcome} alt="header img" />
    </Right>
  </HeaderContainer>
);

export default Header;
