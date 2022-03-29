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
    align-items: flex-start;
  }
  ${media.mobile}{
    padding:2rem;
    align-items: center;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-right: 2rem;
  ${media.mobile}{
    align-items: center;
    margin-right: 0;
    text-align: center;
  }
`;
const Right = styled.div`
  flex: 1;
  max-width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${media.tablet} {
    max-width: 100%;
    margin-top: 4rem;
  }
`;
const Title = styled.h1`
  margin-bottom: 3rem;
`;
const SubTitle = styled.h1`
  color: rgb(220, 202, 135);
  margin: 2rem 0px;
`;
const Box = styled.div``;
const Paragraph = styled.p``;
const Button = styled.button`
  margin-top: 2rem;
`;
const Image = styled.img`
  display: block;
  width: 80%;
  height: auto;
`;

const FindUs = () => {
  return (
    <SubContainer bg={images.bg}>
      <Left>
        <SubHeading title="Contact" />
        <Title className="headtext__cormorant">Find Us</Title>
        <Paragraph className="p__opensans">
          Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G
        </Paragraph>
        <SubTitle className="p__cormorant">Opening Hours</SubTitle>

        <Box>
          <Paragraph className="p__opensans">
            Mon - Fri: 10:00 Am - 02:00 Am
          </Paragraph>
          <Paragraph className="p__opensans">
            Sat - Sun: 10:00 Am - 03:00 Am
          </Paragraph>
        </Box>
        <Button type="button" className="custom__button">
          Visit Us
        </Button>
      </Left>
      <Right>
        <Image src={images.findus} />
      </Right>
    </SubContainer>
  );
};

export default FindUs;
