import React from 'react';
import resumePNG from '../../assets/LydiaResume.png';
import resumePDF from '../../assets/LydiaResume.pdf';
import Nav from '../components/nav';
import Footer from '../components/footer';

export default function Resume() {
    return (
        <div>
            <Nav/>
            <div className='resume'>
                <img src={resumePNG} alt="Lydia Gregory Software Engineering Resume"/>
                <a href={resumePDF} download>Download Resume</a>{` `}
            </div>
            <Footer/>
        </div>
    )
}