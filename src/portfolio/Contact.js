import React, { useState } from 'react'
import styled from "styled-components"


export const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
    return (
       <Container id="contact">
           <Wrapper>
                <Title>Contact Me</Title>
                <Sub>I'd love to hear from you</Sub>
	       <Form>
	         <Input type="text" placeholder="Name" required value={name} onChange={(e) => {
			setName(e.target.value)
		 }} />
	         <Input type="email" placeholder="Email"value={email} onChange={(e) => {setEmail(e.target.value)}} />
	       <Textarea placeholder="Message" value={message} onChange={(e) => {setMessage(e.target.value)}}  />
	         <Btn>Contact Me</Btn>
	       </Form>
           </Wrapper>
       </Container>
)
}

const Form = styled.form`
display: flex;
align-items: center;
flex-direction: column;
`;

const Title = styled.h1`
    font-family: 'Poppins', sans-serif, 'arial';
    font-weight: 600;
    font-size: 40px;
    color: #011834;
    text-align: center;
`;

const Sub = styled.h4`
    font-family: 'Roboto', sans-serif, 'arial';
    font-weight: 400;
    font-size: 20px;
    color: #9b9b9b;
    line-height: 1.5;
    text-align: center;
`;

const Textarea = styled.textarea`
border: 1px solid lightgray;                      width: 300px;
outline: none;
border-radius: 5px;                               height: 40px;                                     font-size: 18px;                                  margin-bottom: 20px;                              color: #011834;                                   padding: 4px  8px;
`

const Input = styled.input`
border: 1px solid lightgray;
width: 300px;
outline: none;
border-radius: 5px;
height: 40px;
font-size: 18px;
margin-bottom: 20px;
color: #011834;
padding: 0 8px;
`;

const Btn = styled.button`
    margin-top: 15px;
    outline: none;
    border: 0;
    padding: 15px 35px;
    border-radius: 10px;
    display: inline-block;
    background-color: #011834;
    color: white;
    font-size: 18px;
    cursor: pointer;
    font-weight: bold;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.06),
              0 2px 10px 0 rgba(0,0,0,0.07);
    -webkit-transition: all 300ms ease;
    transition: all 300ms ease;

    &:hover {
     transform: translateY(1px);
      box-shadow: 0 1px 1px 0 rgba(0,0,0,0.10),
              0 1px 1px 0 rgba(0,0,0,0.09);
    }

    @media (max-width: 768px) {
        width: 50%;
        text-align:center;	
    }
`;

const Wrapper = styled.div`
width: 100%;
display: flex;
justify-content: center;
flex-direction: column;
padding: 20px 0;
background-color: #fff;
`;

const Container = styled.div`
width: 100%;
height: 100%;
min-height: 80vh;
background-color: #dcdcdc;
color: white;
margin-bottom: 30px;
font-family: 'Poppins', sans-serif;
`;
