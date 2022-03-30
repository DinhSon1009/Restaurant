import React, { useRef } from "react";
import styled, { css } from "styled-components";
import { SubHeading } from "../../components";
import { media } from "../../reponsive";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { images } from "../../constants";
const Gallery = () => {
  const scrollRef = useRef();

  const scroll = (direction) => {
    const { current } = scrollRef;
    direction === "left"
      ? (current.scrollLeft -= 301)
      : (current.scrollLeft += 301);
  };
  const SubContainer = styled.div`
    position: relative;
    padding: 4rem 0 4rem 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-black);
    ${media.tablet} {
      flex-direction: column;
      padding: 4rem 0 4rem 4rem;
    }
    ${media.mobile} {
      padding: 1rem;
    }
  `;
  const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding-right: 2rem;
    min-width: 500px;
    ${media.mobile} {
      width: 100%;
      min-width: 0;
    }
  `;
  const Right = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    max-width: 50%;
    position: relative;
    ${media.tablet} {
      margin: 5rem 0;
      max-width: 100%;
    }
  `;
  const Title = styled.h1``;

  const Paragraph = styled.p`
    margin-top: 2rem;
    color: var(--color-grey);
  `;

  const Button = styled.button`
    margin-top: 1rem;
  `;

  const ImageContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow-x: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  `;

  const Image = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    transition: 0.5s ease;
  `;
  const Arrow = styled.div``;
  const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    min-width: 301px;
    height: 447px;
    margin-right: 2rem;
  `;
  const sharedIconStyle = css`
    background: var(--color-black);
    border-radius: 5px;
    position: absolute;
    color: var(--color-golden);
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    font-size: 2rem;
  `;
  const ArrowLeft = styled(IoIosArrowBack)`
    ${sharedIconStyle};
    left: 0;
  `;
  const ArrowRight = styled(IoIosArrowForward)`
    ${sharedIconStyle};
    right: 0;
  `;
  return (
    <SubContainer>
      <Left>
        <SubHeading title="Instagram" />
        <Title className="headtext__cormorant">Photo Gallery</Title>
        <Paragraph className="p__opensans">
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Volutpat
          Mattis Ipsum Turpis Elit Elit Scelerisque Egestas Mu.
        </Paragraph>
        <Button type="button" className="custom__button">
          View More
        </Button>
      </Left>
      <Right>
        <ImageContainer ref={scrollRef}>
          <Box>
            <Image src={images.gallery01} />
          </Box>

          <Box>
            <Image src={images.gallery02} />
          </Box>

          <Box>
            <Image src={images.gallery03} />
          </Box>

          <Box>
            <Image src={images.gallery04} />
          </Box>
        </ImageContainer>
        <Arrow>
          <ArrowLeft onClick={() => scroll("left")} />
          <ArrowRight onClick={() => scroll("right")} />
        </Arrow>
      </Right>
    </SubContainer>
  );
};

export default Gallery;
