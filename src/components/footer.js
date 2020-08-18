import React from "react";
import { FaGithub, FaLinkedin, FaMedium, FaDev } from 'react-icons/fa';

export default function Footer() {
    return (
        <div className='footer'>
            <a href='https://github.com/ljg2gb'>
                <FaGithub/>
            </a>
            <a href='https://www.linkedin.com/in/lydia-gregory/'>
                <FaLinkedin/>
            </a>
            <a href='https://medium.com/@ljg2gb'>
                <FaMedium/>
            </a>
            <a href='https://dev.to/ljg2gb'>
                <FaDev/>
            </a>

        </div>
    )
}