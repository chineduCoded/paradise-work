import React, { useState } from "react";
import styled from "styled-components";
import logo from "./media/pearl.jpg";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import { animateScroll as Scroll, Link } from "react-scroll";
import { FaTimes, FaBars } from "react-icons/fa"

export const Navbar = ({bg, nav, btn, clr, cln}) => {
  const [toggle, setToggle] = useState(false)
  const [click, setClick] = useState(false)

  const onHandle = () => {
    const check = window.scrollY

    if(check>=80){
      setToggle(true)
    }
    else{
      setToggle(false)
    }
  }

  window.addEventListener("scroll", onHandle)

  const handleClick = () => setClick(!click)
  const closeHandle = () => setClick(false)

  return (
    <Container bg={toggle ? "bg":""}>
      <Wrapper>
	<LogoHolder>
        <Logo
          src={logo}
          onClick={() => {
            Scroll.scrollToTop();
          }}
        />
	</LogoHolder>
	<MobileMenu clr={toggle ? "clr":""}  onClick={handleClick}>
	  {click ? <FaTimes />:<FaBars />}
	</MobileMenu>
        <Navigation onClick={closeHandle} click={click} cln={toggle ? "cln":""}>
          <Nav onClick={closeHandle} nav={toggle ? "nav":""} to="home" smooth={true} offset={-100} duration={500}>
            <span>Home</span>
          </Nav>
          <Nav onClick={closeHandle} nav={toggle ? "nav":""} to="service" smooth={true} offset={-100} duration={500}>
           <span> Services</span>
          </Nav>
          <Nav onClick={closeHandle} nav={toggle ? "nav":""} to="contact" smooth={true} offset={-100} duration={500}>
            <span>Contact</span>
          </Nav>
	  <Button btn={toggle ? "btn":""}
          onClick={() => {                                    Scroll.scrollToBottom();                        }}                                              > Goto <ArrowDownwardIcon />
	  </Button>
        </Navigation>
      </Wrapper>
    </Container>
  );
};

const MobileMenu = styled.div`
display: none;

@media screen and (max-width: 768px) {
 display: block;
 align-items: center;
 margin-right: 24px;
 position: absolute;
 top: 20px;
 right: 0;
 font-size: 1.8rem;
 color: ${({clr}) => (clr ? "#fff":"#011834")};
}
`

const Button = styled.button`
  margin-left: 10px;
  width: 120px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 5px;
  cursor: pointer;
  outline: none;
  border: 0;
  color: ${({btn}) => (btn ? "#011834":"#fff")};
  border-radius: 3px;
  background-color: ${({btn}) => (btn ? "#fff":"#011834")};
  font-size: 1.5rem;
  font-weight: bold;
  :hover {
    border: ${({btn}) => (btn ? "2px solid #fff":"2px solid #011834")};
    background-color: ${({btn}) => (btn ? "transparent":"#fff")};
    color: ${({btn}) => (btn ? "fff":"#011834")};
    }
    .MuiSvgIcon-root {
     display: flex;
     align-items: center;
     margin-left: 5px;
     font-weight: bold;
    }

    @media screen and (max-width: 768px) {
     display: flex;
     align-items: center;
     margin-top: 30px;
     justify-content: center;
     width: 60%;
    }
`;

const Nav = styled(Link)`
  display: flex;
  align-items: center;
  margin: 0 10px;
  color: ${({nav}) => (nav ? "#fff":"#011834")};
  .MuiSvgIcon-root {
    font-size: 20px;
    align-items: center;
    margin-right: 5px;
    color: ${({nav}) => (nav ? "#fff":"#011834")}; // rgba(255, 255, 255, 0.7);
    transition: all 400ms;

    @media screen and (max-width: 768px) {
     display: none;
    }
  }
  span {
    //text-transform: uppercase;
    font-weight: bold;
    font-size: 1.5rem;
    letter-spacing: 1px;
    position: relative;
    :after {
      content: "";
      position: absolute;
      bottom: -1px;
      left: 0;
      height: 3px;
      width: 100%;
      background-color: white;
      opacity: 0;
      transition: all 400ms;
      transform: scale(0);
      transform-origin: center;
    }
  }
  :hover {
    cursor: pointer;
    .MuiSvgIcon-root {
      color: rgba(255, 255, 255, 1);
    }
    span {
      :after {
        opacity: 1;
        transform: scale(1);
      }
    }
  }
  @media screen and (max-width: 768px) {
   display: flex;
   align-items: center;
   margin: 10px 0;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 80px;
  background-color: ${({bg}) => (
    bg ? "#011834":"transparent"
  )};
  color: #fff;
  font-family: 'Poppins', sans-serif;
  position: fixed;
  z-index: 99;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
`;

const LogoHolder = styled.div`
width: 120px;
height: 50px;
display: flex;
align-items: center;
margin-left: 24px;
cursor: pointer;
border-radius: 5px;
`

const Navigation = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
   padding-top: 30px;
   display: flex;
   align-items: center;
   flex-direction: column;
   width: 100%;
   height: 90vh;
   background-color: ${({cln}) => (cln ? "#011834":"#fff")};
   color: ${({cln}) => (cln ? "#fff":"#011834")};
   position: absolute;
   top: 80px;
   left: ${({click}) => (click ? "0":"-100%")};
   transition: all 0.35s ease-in-out;
  }
`;
