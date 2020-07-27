import React from "react";
import { Link } from "gatsby";
import Header from '../components/header'

export default function Contact() {
    return (
        <div style={{color: `teal`}}>
            <Link to='/'>Home</Link>
            <Header headerText='Contact'/>
            <p>Email me at ljg2gb@virginia.edu</p>
        </div>
    )
}