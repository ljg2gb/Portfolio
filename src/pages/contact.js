import React from "react";
import Nav from '../components/nav';
import Main from "../components/headerLayout";
import Footer from "../components/footer";

const title = 'Contact'
const text = 
    <div>
        <h3>I'd love to hear from you! Feel free to shoot me an email at <i>lydia.gregory.dev@gmail.com</i> and connect on <a className='link' href="https://www.linkedin.com/in/lydia-gregory/">LinkedIn</a>!</h3>
    </div>

export default function Contact() {
    return (
        <div>
            <Nav/>
            <div className='contact-page'>
                <Main title={title} text={text}/>
            </div>
            <Footer/>
        </div>
    )
}