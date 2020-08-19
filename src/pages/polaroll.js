import React from 'react'
import Nav from '../components/nav'
import Footer from '../components/footer'
import Image from '../../assets/PolarollLogo.png'

export default function Polaroll() {
    return(
        <div>
            <Nav/>
            <div className='project-page'>
                <div className='project-title'>
                    <h1>Polaroll</h1>
                    <h4>A mobile camera app inspired the Polaroid Camera</h4>
                </div>
                <div className='media-box'>
                    <img className='project-page-media' src={Image} alt='screenshot of Accountabilibuddies'></img>
                </div>
                <div className='text-container'>
                    <div>
                        <h4>Languages/Tech</h4>
                        <ul>
                            <li>React Native + Expo</li>
                            <li>Ruby on Rails + Postgres</li>
                            <li>Heroku</li>
                            <li>Firebase Storage</li>
                        </ul>
                        <h4>Links</h4>
                        <ul>
                            <li><a className='small-link' href='https://github.com/ljg2gb/Polaroll'>Code</a></li>
                            <li><a className='small-link' href='https://www.youtube.com/watch?v=ZfXLcVwfa4M&t=3s'>Demo Video</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Description</h4>
                        <p>Polaroll was inspired by my interest in film photography. The app incorporated the phone's camera, camera roll, and motion sensors to take a photo, and watch it develop as the user shakes their phone. The photo can be saved to the phone's camera roll or to the app itself. Firebase Storage was used to store user photos, with a url saved to the app's Rails backend. Working in mobile development for the first time, I encountered an entirely new system for user interaction, and hope to add more swipeable components and animations to the app in the future.</p>
                        <h4>Details</h4>
                        <ul>
                            <li>Flatiron School Software Engineering Program Capstone Project</li>
                            <li>Three-week-long project</li>
                            <li>Mobile app</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}