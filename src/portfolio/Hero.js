import React from 'react'
import styled from "styled-components"
import img from "./media/me.jpg"
import { Link } from "react-scroll";

export const Hero = () => {
    return (
        <Container id="home">
            <Wrapper>
                <Image src={img} />
                <Content>
                    <Title>
                    Hi, I'm Paradise Okoronkwo
                    </Title>
                    <Desc>
                    The CEO of DressRevolve Nigeria and the Project Cordinator at LoftyInc Allied Partners Limited. I'm passionate about style, fasshion and I love creativity.
                    </Desc>
                    <Div>
                        <Button>View CV</Button>
                        <Button to="contact" smooth={true} offset={-100} duration={500}>Contact</Button>
                    </Div>
                </Content>
            </Wrapper>
        </Container>
    )
};

const Container = styled.div`
width: 100%;
height: 100%;
min-height: 80vh;
color: #fff;
padding-top: 80px;
font-family: 'Poppins', sans-serif;

`;

const Wrapper = styled.div`
width: 100%;
display: flex;
justify-content: center;
flex-wrap: wrap;
align-items: center;
padding-top: 40px;
`;

const Image = styled.img`
width: 300px;
height: 300px;
margin: 0 20px;
background-color: #011834;
border-radius: 0 35px 0 35px;
object-fit: cover;
margin-bottom: 10px;
`;

const Content = styled.div`
width: 400px;
padding-bottom: 20px;
margin: 0 20px;
`;

const Title = styled.div`
font-weight: bold;
font-size: 30px;
margin: 10px 10px;
color: #011834;
`;

const Desc = styled.div`
margin: 0 10px;
text-aign: center;
width: 100%;
color: #011834;
`;

const Div = styled.div`
margin-top: 80px;
`;

const Button = styled(Link)`
margin: 0 10px;
width: 120px;
height: 50px;
padding: 10px 25px;
font-weight: bold;
outline: none;
border: 0;
outline: none;
border-radius: 5px;
background-color: #011834;
color: #fff;
transform: scale(1.0);
transition: all 350ms ease;
:hover{
    cursor: pointer;
    border: 1px solid #011834;
    backround-color: transparent;
    color: #fff;
    transform: scale(1.2);
}
`;
