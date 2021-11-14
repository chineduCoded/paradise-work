import React from 'react'
import styled from 'styled-components'

import FacebookIcon from "@mui/icons-material/Facebook";
import CopyrightIcon from '@mui/icons-material/Copyright';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

export const Footer = () => {   

 const date = new Date()
 const year = date.getFullYear()
     return(
     <Container>
	<Wrapper>                                           <Social>                                              <List>                                              <LinkT tw>                                        <TwitterIcon />                                   </LinkT>                                        </List>                                           <List>                                              <LinkF fb>                                          <FacebookIcon />                                </LinkF>                                        </List>                                           <List>
              <LinkY yb><YouTubeIcon /></LinkY>
            </List>
            <List>
              <LinkI inst><InstagramIcon /></LinkI>
            </List>
          </Social>

      <Last>
        <Text><CopyrightIcon /> {year} Developed by  Elijah C.</Text>
      </Last>
   </Wrapper>
     </Container>

)
};


const Container = styled.div`
width: 100%;
height: 150px;
background: #011834;
color: #fff;
font-family: 'Poppins', sans-serif;
`;

const Wrapper = styled.div`
padding-top: 20px;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;

const Social = styled.div`
margin-top: 20px;
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 20px;
`;

const Last = styled.div`
display: flex;
align-items: center;
justify-content: center;
color: #9b9b9b;
`;

const Text = styled.div`
display: flex;
align-items: center;

.MuiSvgIcon-root {
 display: flex;
 align-items: center;
 font-size: 14px;
 margin-right: 5px;
}
`;

const List = styled.div`
margin: 0 20px;
display: flex;
align-items: center;
`;	

const LinkT = styled.a`
display: flex;
align-items: center;
:hover {
  .MuiSvgIcon-root {
    color: ${({tw}) => (
      tw ? "#1da1f2":"#fff"
    )};
}
}
`;

const LinkF = styled.a`
display: flex;
align-items: center;
color: #fff;
:hover {
  .MuiSvgIcon-root {  
    color: ${({fb}) => (
      fb ? "#1877f2":"#fff"
    )}; 
}
}
`;

const LinkY = styled.a`
display: flex;
align-items: center;
color: #fff;
:hover {
  .MuiSvgIcon-root {
    color: ${({yb}) => (
      yb ? "#ff0000":"#fff"
    )};  
}
}
`;

const LinkI = styled.a`
display: flex;
align-items: center;
color: #fff;
:hover {
  .MuiSvgIcon-root {
    color: ${({inst}) => (
      inst ? "#c32aa3":"#fff"
    )};  
}
}
`;
