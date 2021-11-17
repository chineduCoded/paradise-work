import React from 'react'
import styled from "styled-components"
import data from "./data.json"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Service = () => {

    const settings = {
        dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 5000,
      cssEase: "linear",
      responsive: [
	{
	    breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
	    infinite: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
	{
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
      ]
    
      }

    return (
        <Container id="service">
            <Wrapper>
	       <Header>Services</Header>
                <Slide {...settings}>
                    {data.map((props) => (
                    <Card>
                        <Image src={props.img}/>
                        <Content>
                            <Title>{props.title}</Title>
                            <Desc>{props.desc}</Desc>
			</Content>
                    </Card>
                    ))}
                </Slide>
            </Wrapper>
        </Container>
    )
};

const Slide = styled(Slider)`
width: 90%;
display: flex;
align-items: center;
justify-content: center;
color: white;
.slick-slide > div {
    margin: 0 10px;
  }
   
  .slick-list {
    margin: 0 -10px;
  }
   
  .slick-slide *:focus{
    outline: none;
  }
`;

const Desc = styled.div`
margin: 0 10px;
text-align: center;
color: #011834;
`;

const Title = styled.div`
margin: 5px 10px;
font-weight: bold;
font-size: 20px;
text-align: center;
text-transform: uppercase;
line-spacing: 1;
color: #011834;
`;

const Content = styled.div`
color: #011834;
padding: 10px;
`;

const Image = styled.img`
width: 100%;
height: 50%;
object-fit: cover;
border-radius: 5px 5px 0 0;
`;

const Card = styled.div`
width: 330px;
height: 550px;
margin: 15x 5px;
border-radius: 6px;
background: #f5f5f5;
color: #011834;
overflow: hidden;
box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);
transition: all 0.3s;
:hover {
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2); 
    cursor: pointer;
    transform: scale(1.03);
    border-radius: 6px;
}
`;

const Container = styled.div`
width: 100%;
height: 100%;
min-height: 80vh;
color: #fff;
background: #DCDCDC;
font-family: 'Poppins', sans-serif;
`;
const Header = styled.h1`
text-align: center;
color: #011834;
font-size: 40px;
margin-bottom: 20px;
`;

const Wrapper = styled.div`
padding-top: 50px;
width: 100%;
display: flex;
align-items: center;
flex-wrap: wrap;
justify-content: center;
padding: 40px 0;
`
