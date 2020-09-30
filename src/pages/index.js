import React from "react";
import Nav from "../components/nav";
import Projects from "../components/projects";
import Footer from "../components/footer";

const text = <h2>👋 Hi, I'm glad you're here! I am a Full Stack Web Developer interested in building beautiful, breezy applications. If you're looking for someone to join your team, <a className='link' href="mailto:lydia.gregory.dev@gmail.com" target="_blank" rel="noreferrer">contact me</a>!</h2>
export default function Home() {
  return (
    <div>
      <Nav/>
      <div className='layout'>
        {text}
      </div>
      <Projects/>
      <Footer/>
    </div>
  );
}
