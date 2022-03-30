import React, { useState } from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import "./Navbar.css";
import images from "../../constants/images";
import { media } from "../../reponsive";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--color-black);
  padding: 1rem 2rem;
  ${media.mobile} {
    padding: 1rem;
  }
  ${media.tablet} {
    padding: 0rem 0 0rem 4rem;
  }
`;

const Logo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Image = styled.img`
  width: 150px;
  ${media.desktop} {
    width: 210px;
  }
  ${media.mobile} {
    width: 110px;
  }
`;

const Ul = styled.ul`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  ${media.tablet} {
    display: none;
  }
`;

const Li = styled.li`
  cursor: pointer;
  margin: ${(props) => props.margin || "0 1"}rem;
  &:hover {
    color: var(--color-grey);
  }

  ${media.tablet} {
    margin: 2rem;
    cursor: pointer;
    color: var(--color-golden);
    font-size: 2rem;
    text-align: center;
    font-family: var(--font-base);
    &:hover {
      color: var(--color-white);
    }
  }
`;

const A = styled.a`
  margin: 0 1rem;
  text-decoration: none;
  transition: 0.5s ease;
  &:hover {
    border-bottom: 1px solid var(--color-golden);
  }
`;

const Login = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  ${media.mobile} {
    display: none;
  }
`;

const Line = styled.div`
  width: 1px;
  height: 30px;
  background-color: var(--color-grey);
`;

const SmallScreen = styled.div`
  display: none;
  ${media.tablet} {
    display: flex;
  }
`;

const SmallScreenOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: var(--color-black);
  transition: all 0.5s ease;
  flex-direction: column;
  z-index: 5;
  .overlay__close {
    font-size: 27px;
    color: var(--color-golden);
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    display: none;

    ${media.tablet} {
      display: block;
    }
  }
`;

const UlSmall = styled.div`
  display: none;
  z-index: 10;
  list-style: none;

  ${media.tablet} {
    display: flex;
    flex-direction: column;
  }
`;

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <Container>
      <Logo>
        <Image src={images.gericht} alt="app logo" />
      </Logo>
      <Ul>
        <Li className="p__opensans">
          <A href="#home">Home</A>
        </Li>
        <Li className="p__opensans">
          <A href="#about">About</A>
        </Li>
        <Li className="p__opensans">
          <A href="#menu">Menu</A>
        </Li>
        <Li className="p__opensans">
          <A href="#awards">Awards</A>
        </Li>
        <Li className="p__opensans">
          <A href="#contact">Contact</A>
        </Li>
      </Ul>
      <Login>
        <A href="#login" className="p__opensans">
          Log In / Register
        </A>
        <Line />
        <A href="/" className="p__opensans">
          Book Table
        </A>
      </Login>
      <SmallScreen>
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />

        {toggleMenu && (
          <SmallScreenOverlay className="flex__center overlay slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <UlSmall>
              <Li className="p__opensans" margin="2">
                <A href="#home">Home</A>
              </Li>
              <Li className="p__opensans" margin="2">
                <A href="#about">About</A>
              </Li>
              <Li className="p__opensans" margin="2">
                <A href="#menu">Menu</A>
              </Li>
              <Li className="p__opensans" margin="2">
                <A href="#awards">Awards</A>
              </Li>
              <Li className="p__opensans" margin="2">
                <A href="#contact">Contact</A>
              </Li>
            </UlSmall>
          </SmallScreenOverlay>
        )}
      </SmallScreen>
    </Container>
  );
};

export default Navbar;
