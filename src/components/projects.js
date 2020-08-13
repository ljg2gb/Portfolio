import React from "react";
import Project from "../components/project";

export default function Projects() {
  return (
    <div className='projects'>
        <h2>Projects</h2>
            <div className='projects-container'>
                <Project 
                    title='Polaroll' 
                    text='An interactive mobile camera/photo app inspired by the polaroid camera.'
                ></Project>
                <Project 
                    title='Candle' 
                    text="A birthday reminder app to never again forget a friend's birthday."
                ></Project>
                <Project
                    title='Accountabilibuddies' 
                    text="A social media app to help accountability groups complete tasks."
                ></Project>
            </div>
    </div>
  );
}