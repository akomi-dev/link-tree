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

        <div className='links'>

          <a href="https://github.com/akomi-dev">
            <div className="GitHub">
              GitHub
            </div>
          </a>

          <a href='https://www.linkedin.com/in/akomidev/'>
            <div className="LinkedIn">
              LinkedIn
            </div>
          </a>

          <a href='https://discordapp.com/users/465709255974977546'>
            <div className="Discord">
              Discord
            </div>
          </a>

          <a href='https://www.instagram.com/akomi.dev/'>
            <div className="Instagram">
              Instagram
            </div>
          </a>

          <a href='https://twitter.com/akomi_dev'>
            <div className="Twitter">
              Twitter
            </div>
          </a>
        </div>

        <footer>
          <div className='foot'>Footer</div>
        </footer>

      </div>
    </div>
  );
};