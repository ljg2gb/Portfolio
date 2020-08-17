import React from "react";
import Nav from "../components/nav";
import Announcement from "../components/headerLayout";
import Projects from "../components/projects"

const title = 'Web Developer'
const text = <h3>Welcome! I'm glad you're here. I am a Full Stack Web Developer based in Washington DC. I love building fast and interactive web and mobile applications using modern frameworks.</h3>

export default function Home() {
  return (
    <div>
      <Nav/>
      <Announcement title={title} text={text} />
      <Projects></Projects>
    </div>
  );
}
