import React from "react";
import Project from "../components/project";
import { Link } from 'gatsby';

const polaroll = <Link className='link' to='/polaroll'>Polaroll</Link>
const candle = <Link className='link' to='/candle'>Candle</Link>
const accountabilibuddies = <Link className='link' to='/accountabilibuddies'>Accountabilibuddies</Link>

export default function Projects() {
  return (
    <div className='projects'>
        <h2>Projects</h2>
            <div className='projects-container'>
                <Project 
                    path="/polaroll/"
                    title={polaroll}
                    text='An interactive mobile camera/photo app inspired by the Polaroid camera.'
                ></Project>
                <Project
                    path="/candle/"
                    title={candle} 
                    text="A birthday reminder app to never again forget a friend's birthday."
                ></Project>
                <Project
                    path="/accountabilibuddies/"
                    title={accountabilibuddies}
                    text="A social media app to help accountability groups complete tasks."
                ></Project>
            </div>
    </div>
  );
}