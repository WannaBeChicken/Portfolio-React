import React from 'react'
import { Container } from 'react-bootstrap'
import avatar from "./home-main.svg";
function Home2() {
    return (
        <Container className='home2-container'>
            <Container>
                <Container className='home2-text'><p>Hello</p></Container>
                <Container className='home2-img'><img src={avatar} /></Container>
            </Container>
        </Container>
    )
}

export default Home2;