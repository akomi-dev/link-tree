import './head.css'
import { useState, useEffect } from "react";
import fetch from 'node-fetch';

export default function Head() {
  const [img, setImg] = useState("Loading...");

  const getImg = () => {
    fetch("https://api.github.com/users/akomi-dev")
      .then((res) => res.json())
      .then((data) => {
        setImg(data.avatar_url)
      })
  };

  useEffect (() => {
    getImg()
  }, []);

  return (
    <header>
      <div className="head">
        <img 
          className='mainImg' 
          alt='profile img' 
          src={img}
        />
        <h1 className="Name">Akomi</h1>
      </div>
      <p className='description'>
        Hello, I am Akomi. I am a current college 
        student majoring in the field of computer 
        science. I am aspiring to become a talented
        software engineer as development and 
        creativity are great passions of mine.
      </p>
    </header>
  )
}