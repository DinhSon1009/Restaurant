import React from "react";
import styled from "styled-components";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import { media } from "../../reponsive";

const SubContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
  background: url(${(props) => props.bg});
  background-position: 50%;
  background-size: cover;
  background-repeat: repeat;
  background-attachment: fixed;
  padding: 4rem 6rem;
  ${media.tablet} {
    flex-direction: column;
    padding: 4rem 0 4rem 4rem;

  }
  ${media.mobile}{
    padding:2rem 1rem;
  }
`;

const Left = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  margin-right: 2rem;
  ${media.tablet} {
    margin: 0 0 5rem;
  }
`;

const Image = styled.img`
  display: block;
  width: 80%;
  ${media.tablet} {
    width: 100%;
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex: 1;
`;

const Title = styled.h1`
`;

const Quote = styled.div`
  margin-top: 5rem;
  ${media.mobile}{
    margin-top: 2rem;
  }
`;

const TopContent = styled.div`
  display: flex;
  align-items: flex-end;
`;

const Icon = styled.img`
  width: 47px;
  height: 40px;
  margin: 0 1rem 1rem 0;
`;

const Paragraph = styled.p``;

const BottomContent = styled.div``;

const Sign = styled.div`
  width: 100%;
  margin-top: 3rem;
`;

const Name = styled.h1`
  font-family: var(--font-base);
  font-weight: 400;
  font-size: 32px;
  line-height: 41.6px;
  letter-spacing: 0.04em;
  text-transform: capitalize;
  color: var(--color-golden);
`;

const SignImage = styled.img`
  width: 250px;
  margin-top: 3rem;
`;

const Chef = () => {
  return (
    <SubContainer bg={images.bg}>
      <Left>
        <Image src={images.chef} alt="chef" />
      </Left>
      <Right>
        <SubHeading title="Chef's Word" />
        <Title className="headtext__cormorant">What We Believe In</Title>
        <Quote>
          <TopContent>
            <Icon src={images.quote}></Icon>
            <Paragraph className="p__opensans">
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Auctor Sit
              .
            </Paragraph>
          </TopContent>
          <BottomContent>
            <Paragraph className="p__opensans">
              Auctor Sit Iaculis In Arcu. Vulputate Nulla Lobortis Mauris Eget
              Sit. Nulla Scelerisque Scelerisque Congue Ac Consequat, Aliquam
              Molestie Lectus Eu. Congue Iaculis Integer Curabitur Semper Sit
              Nunc.
            </Paragraph>
          </BottomContent>
        </Quote>
        <Sign>
          <Name>Kevin Luo</Name>
          <Paragraph className="p__opensans">Chef & Founder</Paragraph>
          <SignImage src={images.sign} alt="sign" />
        </Sign>
      </Right>
    </SubContainer>
  );
};

export default Chef;
