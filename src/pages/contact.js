import React from "react";
import Nav from '../components/nav';
import Main from "../components/headerLayout";

const title = 'Contact'
const text = <h3>Email: lydia.gregory.dev@gmail.com</h3>

export default function Contact() {
    return (
        <div>
            <Nav/>
            <Main title={title} text={text}/>
        </div>
    )
}