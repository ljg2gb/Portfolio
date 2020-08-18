import React from "react";
import Project from "../components/project";

const polaroll = <a className='link' href="https://github.com/ljg2gb/Polaroll">Polaroll</a>
const candle = <a className='link' href="https://github.com/ljg2gb/Candle">Candle</a>
const accountabilibuddies = <a className='link' href="https://github.com/ljg2gb/Accountabilibuddies">Accountabilibuddies</a>

export default function Projects() {
  return (
    <div className='projects'>
        <h2>Projects</h2>
            <div className='projects-container'>
                <Project 
                    title={polaroll}
                    text='An interactive mobile camera/photo app inspired by the Polaroid camera.'
                ></Project>
                <Project 
                    title={candle} 
                    text="A birthday reminder app to never again forget a friend's birthday."
                ></Project>
                <Project
                    title={accountabilibuddies}
                    text="A social media app to help accountability groups complete tasks."
                ></Project>
            </div>
    </div>
  );
}