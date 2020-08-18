import React from 'react';
import PDF from '../../assets/LydiaResume.png';
import Nav from '../components/nav';
import Footer from '../components/footer';

export default function Resume() {
    return (
        <div>
            <Nav/>
            <div className='resume'>
                <a href='../../assets/LydiaResume.pdf' download>Download Resume</a>
                <img src={PDF} alt="Lydia Gregory Software Engineering Resume"/>
            </div>
            <Footer/>
        </div>
    )
}