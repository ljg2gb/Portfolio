import React from "react";
import Nav from "../components/nav";
import Main from "../components/headerLayout";

const title = 'About Me'
const text = 'I am a software engineer with a background in graphic design and marketing.'

export default function About() {
  return (
    <div>
      <Nav/>
      <Main title={title} text={text} />
    </div>
  )
}