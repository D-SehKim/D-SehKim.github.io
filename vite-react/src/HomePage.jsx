import React from 'react';
import './HomePage.css';
import Toggle from './Components/Toggle';

function HomePage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="App" id="backgorund-div">
      <title>
        Daniel Kim
      </title>
      <header>
        Daniel Kim
      </header>
      <section>
        <p>
          Hi! I'm Daniel Kim, a passionate Computer Science student at UMass Amherst! During the day, you’ll find me diving deep into the fascinating world of machine learning and neural networks (More specifically into Computer Vision via CNNs), and by night, I unleash my creativity in 
          game development (check out my most recent one <a href="https://d-sehkim.github.io/game/">link</a>).<br></br><br></br>
          I’ve also been lucky to work on some exciting projects in my free time. One of them is RevUMass, a full-stack app that helps UMass students share reviews, and another is LockIn, a CNN-based tool designed to help people with short attention spans stay focused and productive.<br></br><br></br>
          When I’m not coding you can find me at the local library exploring my artistic side through drawing and 3D modeling. These hobbies really enrich my perspective on programming, allowing me to blend creativity with technology.<br></br><br></br>
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
        <br></br>https://upload.wikimedia.org/wikipedia/commons/8/87/Sakura.svg
        <br></br><a href="https://d-sehkim.github.io/prototype/">proto</a>
      </footer>
    </div>
  );
}

export default HomePage;