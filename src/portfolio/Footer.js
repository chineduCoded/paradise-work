import React from 'react'
import styled from 'styled-components'

import CopyrightIcon from '@mui/icons-material/Copyright';

export const Footer = () => {   

 const date = new Date()
 const year = date.getFullYear()
     return(
     <Container>
	<Wrapper>                                 

      <Last>
        <Text><CopyrightIcon /> {year}. Developed by  <span>Elijah C.</span></Text>
      </Last>
   </Wrapper>
     </Container>

)
};


const Container = styled.div`
width: 100%;
height: 100px;
background: #011834;
color: #fff;
font-family: 'Poppins', sans-serif;
`;

const Wrapper = styled.div`
padding-top: 40px;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;


const Last = styled.div`
display: flex;
align-items: center;
color: rgba(255, 255, 255, 0.6);
`;

const Text = styled.div`
display: flex;
align-items: center;

span{
color: teal;
display: flex;
align-items: center;
text-align: center;
margin-left: 5px;
font-weight: bold;
 &:hover {
  text-decoration: underline;
 }
}

.MuiSvgIcon-root {
 display: flex;
 align-items: center;
 font-size: 14px;
 margin-right: 5px;
}
`;

	


