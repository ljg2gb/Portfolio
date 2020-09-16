import React from "react";
import { navigate } from 'gatsby';

export default function Project({title, text, path}) {
  function navigateTo() {
    navigate(path)
  }

  function handleKeyDown(ev) {
    if (ev.keyCode == 13) {
      navigateTo()
    }
  }
  
  return (
      <div className='project-thumbnail' onClick={() => navigateTo()} onKeyDown={() => handleKeyDown()}>
          <h3>{title}</h3>
          <p>{text}</p>
      </div>
  );
}


