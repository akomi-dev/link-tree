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
    getImg();
  }, []);

  return (
    <header>
      <img 
        className='mainImg' 
        alt='profile img' 
        src={img}
        height={200}
      />
      <h1 className="Name">Akomi</h1>
      <p className='description'>
        eros donec ac odio tempor orci dapibus ultrices in iaculis 
        nunc sed augue lacus viverra vitae congue eu consequat ac
      </p>
    </header>
  )
}