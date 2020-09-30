import React from 'react'
import Nav from '../components/nav'
import Image from '../../assets/Candle.png'
import Footer from '../components/footer'

export default function Candle() {
    return(
        <div>
            <Nav/>
            <div className='project-page'>
                <div className='project-title'>
                    <h1>Candle</h1>
                    <h4>A birthday reminder web application</h4>
                </div>
                <div className='media-box'>
                    <img className='project-page-media' src={Image} alt='screenshot of Candle'></img>
                </div>
                <div className='text-container'>
                    <div>
                        <h4>Languages</h4>
                        <ul>
                            <li>ReactJS</li>
                            <li>Ruby on Rails</li>
                            <li>Sass</li>
                        </ul>
                        <h4>Links</h4>
                        <ul>
                            <li><a className='small-link' href='https://github.com/ljg2gb/Candle' target="_blank" rel="noreferrer">Code</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Description</h4>
                        <p>Candle is a web app built to never again forget an important birthday. After logging in, the user can view all of the birthdays happening that month and see all the friends currently listed in the app. They can also easily add or remove a birthday from the app. The app, which takes advantage of the date/time Javascript object, will dynamically update the age of each friend as a birthday passes on the frontend, while storing the DD/MM/YY of each friend in the database.</p>
                        <h4>Details</h4>
                        <ul>
                            <li>Four-day solo project</li>
                            <li>Solidfied understanding of ReactJS</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}