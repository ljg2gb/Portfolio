import React from "react";

export default function Home({title, text}) {
  return (
    <div className='layout'>
        <h1>{title}</h1>
        <h3>{text}</h3>
    </div>
  );
}