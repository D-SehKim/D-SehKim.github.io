import React, { useState, useRef, useEffect } from 'react';
import Grid from './Grid';
import './toggle.css'
import jsonDataAcademics from '../Important/academics.json'
import jsonDataContact from '../Important/contact.json'
import jsonDataExperiences from '../Important/experiences.json'
import jsonDataProjects from '../Important/projects.json'
import jsonDataResume from '../Important/resume.json'

const Toggle = ({ whereJson, title}) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState('0px');

  const toggleItems = () => {
    setIsOpen(!isOpen);
  };

  const dataFiles = [jsonDataAcademics, jsonDataResume, jsonDataProjects, jsonDataExperiences, jsonDataContact];

  useEffect(() => {
    // Update maxHeight based on the scrollHeight of the content
    if (isOpen) {
      setMaxHeight(`${contentRef.current.scrollHeight + 50}px`);
    } else {
      setMaxHeight('0px');
    }
  }, [isOpen]);


  return (
    <div className='total'>
      <h2 onClick={toggleItems} style={{ cursor: 'pointer' }}>
         {title}
        <span 
          style={{
            display: 'inline-block',
            transition: 'transform 0.3s ease', 
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        >
          ▼
        </span>
      </h2>
        <div className="container" style={{ maxHeight }}>
            <ul ref={contentRef}>
            {dataFiles[whereJson].map((item, index) => (
                <Grid key={index}
                    title={item.title}
                    description={item.description.split('\n').map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          {i < item.description.split('\n').length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    link={item.link}
                />
            ))}
            </ul>
        </div>
    </div>
  );
};

export default Toggle;
