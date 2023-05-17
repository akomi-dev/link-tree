import './App.css';
import { useState, useEffect } from "react";
import fetch from 'node-fetch';

export default function App() {

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
    <div className="App">
      <div className="Container" >
        <header className='Head'>
          <img 
              className='mainImg' 
              alt='profile img' 
              src={img}
          />
          <h1 className="Name">Akomi</h1>
        </header>
      </div>
    </div>
  );
};