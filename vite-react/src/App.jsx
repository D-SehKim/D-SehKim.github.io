import React from 'react';
import './App.css';
import Toggle from './Components/Toggle';
import Background from './Components/BackgroundModel';

function App() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="App">
      <Background />
      <title>
        Daniel Kim
      </title>
      <header>
        Daniel Kim
      </header>
      <section>
        <p>
          Hello! I'm Daniel Kim, a passionate Computer Science student at UMass Amherst! During the day, you’ll find me diving deep into the fascinating world of machine learning and neural networks (More specifically into Computer Vision via CNNs), and by night, I unleash my creativity in game development.<br></br><br></br>
          I’ve also been lucky to work on some exciting projects in my free time. One of them is RevUMass, a full-stack app that helps UMass students share reviews, and another is LockIn, a CNN-based tool designed to help people with short attention spans stay focused and productive.<br></br><br></br>
          When I’m not coding you can find me at the local coffee shop exploring my artistic side through drawing and 3D modeling. These hobbies really enrich my perspective on programming, allowing me to blend creativity with technology.<br></br><br></br>
          I’m always eager to learn and connect with others who share similar interests, so feel free to reach out (I'm always checking my linkedIn direct messages)!
        </p>
      </section>
      <Toggle
        whereJson="0"
        title="Academics"
      />
      <Toggle
        whereJson="1"
        title="Resume/CV"
      />
      <Toggle
        whereJson="2"
        title="Projects"
      />
      <Toggle
        whereJson="3"
        title="Experiences"
      />
      <Toggle
        whereJson="4"
        title="Contact Me!"
      />
      <footer>
        @{currentYear} Copyright - Daniel Kim<br></br>
        "Sakura / Cherry Blossom (桜の木)" (https://skfb.ly/oPoI7) by 18gen is licensed under<br></br> Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
        <br></br>https://upload.wikimedia.org/wikipedia/commons/8/87/Sakura.svg
      </footer>
    </div>
  );
}

export default App;