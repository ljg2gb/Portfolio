import React from "react";
import { FaGithub, FaLinkedin, FaMedium, FaCodepen } from 'react-icons/fa';

export default function Footer() {
    return (
        <div className='footer'>
            <div>
                <p>Built with <span role="img" aria-label="heart emoji">❤ </span> by Lydia</p>
            </div>
            <div>
                <a href='https://github.com/ljg2gb'>
                    <span role="img" aria-label="link to github">
                        <FaGithub/>
                    </span>
                </a>
                <a href='https://www.linkedin.com/in/lydia-gregory/'>
                    <span role="img" aria-label="link to linkedIn">
                        <FaLinkedin/>
                    </span>
                </a>
                <a href='https://medium.com/@ljg2gb'>
                    <span role="img" aria-label="link to Medium">
                        <FaMedium/>
                    </span>
                </a>
                <a href='https://codepen.io/Lydia_gregory'>
                    <span role="img" aria-label="link to Codepen">
                        <FaCodepen/>
                    </span>
                </a>
            </div>
        </div>
    )
}