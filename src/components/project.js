import React from "react";
import { navigate } from 'gatsby';

export default function Project({title, text, path}) {
  function navigateTo() {
    navigate(path)
  }
  
  return (
      <div className='project-thumbnail' onClick={() => navigateTo()}>
          <h3>{title}</h3>
          <p>{text}</p>
      </div>
  );
}