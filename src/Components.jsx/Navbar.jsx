import React from 'react'
import styled from 'styled-components'
const Container=styled.div`

height: 60 px;
background-color: blueviolet;


`
const Wrapper=styled.div`
padding: 10px 20px;
display: flex;
justify-content: space-between;


`
const Left=styled.div`
    flex:1;


`
const Language=styled.div`
    

`
const Center=styled.div`
    flex:1;


`
const Logo=styled.div`
`
const Right=styled.div`
    flex:1;

`
const SearchContainer=styled.input`

`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
             <Left>
                <Language>
                    EN
                </Language>
                <SearchContainer>
                    input 
                    icon
                </SearchContainer>
                
             </Left>
             <Center>
                <Logo>
                    RKB
                </Logo>
             </Center>
             <Right>
                

             </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar