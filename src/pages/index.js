import React from "react"
import { Link } from "gatsby"

export default function Home() {
  return (
    <div style={{ color: `purple` }}>
      <Link to="/contact/">Contact</Link>
      <h1>Lydia Gregory's Portfolio</h1>
      <h2>Welcome, I'm glad you're here!</h2>
      <p>I'll be launching my portfolio soon. In the meantime, you can learn more about me on <a href="https://github.com/ljg2gb">Github</a> and <a href="https://www.linkedin.com/in/lydia-gregory/">LinkedIn</a>.
      </p>
    </div>
  );
}
