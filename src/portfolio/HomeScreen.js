import React from 'react'
import styled from "styled-components"
import { Navbar } from "./Navbar"
import { Hero } from "./Hero"
import { Service } from './Service'
import { Contact } from "./Contact"
import { Footer } from "./Footer"


export const HomeScreen = ({toggle}) => {
    return (
        <Container>
            <Wrapper>
               <Navbar />
                <Hero />
                <Service />
	         <Contact />
	        <Footer />
            </Wrapper>
        </Container>
    )
};

const Container = styled.div`
`;

const Wrapper = styled.div`
`;
