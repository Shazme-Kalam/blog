import React from 'react'
import Header from './Header'
import './App.css'
import { Container } from 'react-bootstrap'

const About = () => {
  return (
    <Container style={{backgroundImage: "linear-gradient(to right, #F1D4E9, #F1DBF7, #F8DBF7 )"}}> <br />
    
      <Header />
      <h4 className="gradient-paragraph">Blogging is the act of creating and maintaining a blog, which is a regularly updated website or online platform where an individual or a group of individuals share their thoughts, opinions, experiences, or expertise on various topics.Blogging continues to evolve with emerging trends, technologies, and platforms, offering diverse opportunities for individuals and businesses to share their stories and connect with audiences worldwide.</h4>
    </Container>
  )
}

export default About
