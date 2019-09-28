import React from 'react';
import './App.css';

function Background(props) {
  const { children } = props;
  return (
    <div className="background">{children}</div>
  );
}

export default Background;
