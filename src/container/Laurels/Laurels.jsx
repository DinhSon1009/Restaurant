import React from "react";
import styled from "styled-components";
import { SubHeading } from "../../components";
import { media } from "../../reponsive";
import { data } from "../../constants";
import "./Laurels.css";
import Award from "./Award";
import { images } from "../../constants";
const SubContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
  background-color: var(--color-black);
  padding: 4rem 6rem;
  background: url(${(props) => props.bg});
  background-position: 50%;
  background-size: cover;
  background-repeat: repeat;
  background-attachment: fixed;
  ${media.tablet} {
    flex-direction: column;
    padding: 4rem 0 4rem 4rem;
  }
  ${media.mobile}{
    padding:2rem 1rem;
  }
`;

const Left = styled.div`
  flex: 1;
`;

const Title = styled.h1``;

const Right = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  margin-left: 2rem;
  ${media.phone} {
    align-items: center;
    margin-left: 0;
  }
`;

const Awards = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  margin-top: 3rem;
  ${media.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const Image = styled.img`
  display: block;
  width: 80%;
  ${media.tablet} {
    width: 100%;
    margin: 5rem 0 0;
  }
`;

const Laurels = () => (
  <SubContainer bg={images.bg}>
    <Left>
      <SubHeading title="Awards & Recognition" />
      <Title className="headtext__cormorant">Our Laurels</Title>
      <Awards>
        {data.awards.map((item, index) => (
          <Award item={item} key={index} />
        ))}
      </Awards>
    </Left>
    <Right>
      <Image src={images.laurels} />
    </Right>
  </SubContainer>
);

export default Laurels;
