import React from "react"
import photo from "../../assets/bagelpub.jpeg"
import "../../styles/index.css"

const Home = () => {
  return (
    <>
      <main>
        <div style={{ marginTop: "16px" }}>
          <h1>Lydia Gregory</h1>

          <p>Full-Stack Software Engineer</p>

          <p>Seattle, WA</p>
        </div>

        <div style={{ marginBottom: "16px" }}>
          <p>
            <a href="https://github.com/ljg2gb">Github</a>
          </p>

          <p>
            <a href="https://www.linkedin.com/in/lydia-gregory/">LinkedIn</a>
          </p>
        </div>
      </main>

      <img src={photo} alt="" />
    </>
  )
}

export default Home
