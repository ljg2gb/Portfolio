import React from "react";

export default function Project({title, text}) {
  return (
    <div className='project'>
        <h3>{title}</h3>
        <image></image>
        <p>{text}</p>
    </div>
  );
}