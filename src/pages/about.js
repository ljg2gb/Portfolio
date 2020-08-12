import React from "react";
import Nav from "../components/nav";
import Main from "../components/headerLayout";

const title = 'About Me'
const text = 
    <div>
        <h3>I am a software engineer, lifelong learner, and salsa dancer! Before I transitioned into code, I worked in graphic design and marketing. I spent a year living in Spain - teaching English and improving my Spanish after I graduated the University of Viriginia in 2018 with a degree in Cognitive Science, and Studio Art. While at school, I pursued an interest in art and developed a personal <a href='https://ljg2gb.myportfolio.com/'>portfolio</a> of my work.</h3>
        <br/>
        <h3>Finding code has allowed me to express myself and my ideas in new and creative ways. I am passionate about user-experiece, and interative design. I love the challenge of solving interesting code problems, and feel proud to have chosen a career with endless opporunities to learn and grow. If you're interested in learning more about me and my transtion into tech, I'd love to hear from you! My email is lydia.gregory.dev@gmail.com.</h3>
        <br/>
    </div>
    
export default function About() {
  return (
    <div>
      <Nav/>
      <Main title={title} text={text} />
    </div>
  )
}