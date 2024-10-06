import React from 'react';
import './Grid.css';

const Grid = ({ title, description, link }) => {
  return (
    <div className="grid-box">
      <h2 className="grid-box-title">{title}</h2>
      <p className="grid-box-description">{description}</p>
      <a href={link} target="_blank">{link}</a>
    </div>
  );
};

export default Grid;