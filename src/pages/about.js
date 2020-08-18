import React from "react";
import Nav from "../components/nav";
import Main from "../components/headerLayout";
import me from "../../assets/Lydia.png"

const title = 'About Me'
const text = 
    <div>
        <h3>I am a software engineer, lifelong learner, and an avid salsa dancer. I graduated the University of Viriginia in 2018 with a degree in Cognitive Science, and Studio Art, and transitioned into code with the Flatiron School in Denver.</h3>
        <br/>
        <h3>Finding code has allowed me to express myself and my ideas in new and creative ways. I love the challenge of solving interesting code problems, and am excited to have chosen a career with endless opporunities to learn and grow. If you're interested hearing more about my transtion into tech, my email is <i>lydia.gregory.dev@gmail.com.</i></h3>
        <br/>
        <h3>You can see my previous design work, sculptures and photography at <a href='https://ljg2gb.myportfolio.com/'>personal portfolio</a>.</h3>
    </div>
    
export default function About() {
  return (
    <div>
      <Nav/>
      <Main title={title} text={text} />
      <img src={me} alt="Lydia loves dogs too" />
    </div>
  )
}