import React from "react";

export default function Project({title, text}) {
  return (
    <div className='project'>
        <h3>{title}</h3>
        <p>{text}</p>
    </div>
  );
}