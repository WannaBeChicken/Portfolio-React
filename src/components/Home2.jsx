import React from 'react'
import { Container } from 'react-bootstrap'
import avatar from "./images/developer.svg";

function Home2() {
    return (
        <Container className='home2-container'>
            <Container>
            <Container className='home2-img'><img src={avatar} /></Container>
            
                <Container className='home2-text'><p>Myself <span>Pratham Agarwal</span> from Jamshedpur, Jharkhand.  
                Currently I'm a 3rd year <span>CSE</span> undergraduate from BIT mesra . In general i love problem solving. 
                Currently i'm learning mern stack and aspire to be a <span>Full Stack Developer</span>.
                and when it comes to extra curriculars, I am the <span>General Seceratary</span> of IET BIT mesra. 
                Being a part of that club i have organised many events workshops nd hackathon.</p>
                </Container>
                
            </Container>
        </Container>
    )
}

export default Home2;