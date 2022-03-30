import React from "react";
import styled from "styled-components";
import { images } from "../../constants";
import { media } from "../../reponsive";
const Footer = () => {
  const SubContainer = styled.div`
    background-color: var(--color-black);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4rem 6rem;
    ${media.tablet} {
      padding: 2rem 4rem;
    }
    ${media.mobile} {
      padding: 2rem 1rem;
    }
  `;
  const Heading = styled.div`
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  const Top = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem 4rem;
    border: 1px solid var(--color-golden);
    background: var(--color-black);
    ${media.tablet} {
      padding: 0;
    }
    ${media.mobile} {
      border: none;
    }
  `;
  const Title = styled.h1`
    text-align: center;
  `;
  const Paragraph = styled.p`
    text-align: center;
  `;
  const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 3rem;
    ${media.tablet} {
      width: 100%;
      flex-direction: column;
    }
  `;
  const Button = styled.button`
    ${media.tablet} {
      margin-top: 2rem;
      margin-bottom: 2rem;
    }
  `;
  const Input = styled.input`
    flex: 1;
    min-width: 620px;
    border: 1px solid var(--color-golden);
    border-radius: 5px;
    font-size: 1rem;
    font-family: var(--font-base);
    color: var(--color-white);
    margin-right: 2rem;
    padding: 0.75rem 1rem;
    background: var(--color-black);
    ${media.tablet} {
      width: 80%;
      margin-right: 0;
      min-width: 0;
    }
  `;
  const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 5rem;
    padding: 0 2rem;
    width: 100%;
    ${media.tablet} {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  `;
  const Item = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex: 1;
    ${media.tablet} {
      margin: 1.5rem;
    }
  `;
  const BoxFlexCol = styled.div``;

  const Image = styled.img`
    width: 150px;
    ${media.desktop} {
      width: 210px;
    }
    ${media.mobile} {
      width: 110px;
    }
  `;
  const ItemTitle = styled.h1`
    font-family: var(--font-base);
    color: var(--color-white);
    font-weight: 400;
    letter-spacing: 0.04em;
    text-transform: capitalize;
    font-size: 32px;
    line-height: 41.6px;
    margin-bottom: 1rem;
  `;
  return (
    <SubContainer>
      <Top>
        <Heading>
          <p className="p__cormorant">Newsletter</p>
          <img src={images.spoon} alt="spoon" className="spoon__img " />
        </Heading>
        <Title className="headtext__cormorant">
          Subscribe To Our Newsletter
        </Title>
        <Paragraph className="p__opensans">
          And Never Miss Latest Updates!
        </Paragraph>
        <Box>
          <Input placeholder="Enter your email address"></Input>
          <Button type="button" className="custom__button">
            Subcribe
          </Button>{" "}
        </Box>
      </Top>
      <Bottom>
        <Item>
          <ItemTitle className="p__cormorant">Contact Us</ItemTitle>
          <Paragraph className="p__opensans">
            9 W 53rd St, New York, NY 10019, USA
          </Paragraph>
          <Paragraph className="p__opensans">+1 212-344-1230</Paragraph>
          <Paragraph className="p__opensans">+1 212-555-1230</Paragraph>
        </Item>
        <Item>
          <Image
            src={images.gericht}
            alt="logo"
            style={{ marginBottom: "1rem" }}
          />
          <Paragraph className="p__opensans">
            "The Best Way To Find Yourself Is To Lose Yourself In The Service Of
            Others."
          </Paragraph>
          <Image
            src={images.spoon}
            style={{ width: "45px", marginTop: "15px" }}
          ></Image>
        </Item>
        <Item>
          <ItemTitle className="p__cormorant">Working Hours</ItemTitle>
          <BoxFlexCol>
            <Paragraph className="p__opensans">Monday-Friday:</Paragraph>
            <Paragraph className="p__opensans" style={{ marginBottom: "1rem" }}>
              08:00 Am - 12:00 Am
            </Paragraph>
          </BoxFlexCol>
          <BoxFlexCol>
            <Paragraph className="p__opensans">Saturday-Sunday:</Paragraph>
            <Paragraph className="p__opensans" style={{ marginBottom: "1rem" }}>
              07:00 Am - 11:00 Pm
            </Paragraph>
          </BoxFlexCol>
        </Item>
      </Bottom>
      <Box style={{ marginTop: "3rem" }}>
        <Paragraph className="p__opensans">
          2021 Gericht. All Rights Reserved.
        </Paragraph>
      </Box>
    </SubContainer>
  );
};

export default Footer;
