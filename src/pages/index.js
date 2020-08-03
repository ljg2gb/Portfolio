import React from "react";
import Nav from "../components/nav";
import Announcement from "../components/headerLayout";

const title = 'Welcome'
const text = <h3>I'm glad you're here. I'll be launching my portfolio soon! In the meantime, you can learn more about me on <a href="https://github.com/ljg2gb">Github</a> and <a href="https://www.linkedin.com/in/lydia-gregory/">LinkedIn</a>.</h3>

export default function Home() {
  return (
    <div>
      <Nav/>
      <Announcement title={title} text={text} />
    </div>
  );
}
