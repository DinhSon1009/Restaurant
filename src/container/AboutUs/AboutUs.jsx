import React from "react";
import styled from "styled-components";
import { media } from "../../reponsive";
import { images } from "../../constants";

const CartContainer = styled.div`
  padding: 4rem 6rem;
  position: relative;
  ${media.tablet} {
    padding: 4rem;
  }
  ${media.mobile}{
    padding:1rem;
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  img {
    width: 391px;
    height: 415px;
    ${media.mobile}{
      max-width: 100%;
    }
  }
`;

const Content = styled.div`
  width: 100%;
  z-index: 2;
  display: flex;
  ${media.mobile} {
    display: flex;
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
  text-align: right;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  flex-direction: column;
`;

const Item = styled.div`
  margin: 2rem 4rem;
  ${media.mobile} {
    margin: 4rem 0;
  }
  img {
    height: 910px;
    ${media.tablet} {
      height: 1110px;
    }
  }
`;

const Paragraph = styled.p`
  margin: 2rem 0;
  color: var(--color-grey);
  ${media.desktop} {
    margin: 4rem 0;
  }
`;

const AboutUs = () => (
  <CartContainer className="flex__center app__bg section__padding " id="about">
    <Overlay className="flex__center">
      <img src={images.G} alt="g letter " />
    </Overlay>
    <Content className="aboutus-content flex__center">
      <Left className="aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <Paragraph className="p__opensans">
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Quis Pharetra
          Adipiscing Ultrices Vulputate Posuere Tristique. In Sed Odio Nec
          Aliquet Eu Proin Mauris Et.
        </Paragraph>
        <button type="button" className="custom__button">
          Know More
        </button>
      </Left>
      <Item className="aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </Item>
      <Right className="aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <Paragraph className="p__opensans">
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Quis Pharetra
          Adipiscing Ultrices Vulputate Posuere Tristique. In Sed Odio Nec
          Aliquet Eu Proin Mauris Et.
        </Paragraph>
        <button type="button" className="custom__button">
          Know More
        </button>
      </Right>
    </Content>
  </CartContainer>
);

export default AboutUs;
