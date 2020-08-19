import React from 'react'
import Nav from '../components/nav'
import Footer from '../components/footer'
import Image from '../../assets/Accountabilibuddies.png'

export default function Accountabilibuddies() {
    return(
        <div>
            <Nav/>
            <div className='project-page'>
                <div className='project-title'>
                    <h1>Accountabilibuddies</h1>
                    <h4>Helping groups complete tasks</h4>
                </div>
                <div className='media-box'>
                    <img className='project-page-media' src={Image} alt='screenshot of Accountabilibuddies'></img>
                </div>
                <div className='text-container'>
                    <div>
                        <h4>Languages</h4>
                        <ul>
                            <li>HTML/CSS/JS</li>
                            <li>Ruby on Rails</li>
                        </ul>
                        <h4>Links</h4>
                        <ul>
                            <li><a className='small-link' href='https://github.com/ljg2gb/Accountabilibuddies'>Code</a></li>
                            <li><a className='small-link' href='https://www.youtube.com/watch?v=ECMCJ1QmmPw'>Demo Video</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Description</h4>
                        <p>While adapting to fully-remote learning/working in 2020, my partner and I realized the importance of checking in with friends. We built Accountabilibuddies to help accountability groups complete their goals. Using a social media model, we built a platform where members can create new groups and add their friends, post goals, and mark the goals as complete for each group member. A major challenge in building this app was developing the relationship model (ERB), and working with the fetched data on the frontend.</p>
                        <h4>Details</h4>
                        <ul>
                            <li>1-week long group project with Nolan Dyke</li>
                            <li>Jamstack application with Rails backend</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}