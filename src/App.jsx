import './App.css';
import Head from './head.jsx';
import Links from './links.jsx';
import Foot from './foot.jsx';

export default function App() {
  return (
    <div className="App">
      <div className="Container" >

        <Head />

        <Links />

        <Foot />

      </div>
    </div>
  );
};