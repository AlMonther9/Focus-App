// src/components/Tree.js
import React from 'react';

const Tree = ({ growth }) => (
  <div style={{ height: 100, width: 100, background: 'green' }}>
    {Array.from({ length: growth }).map((_, index) => (
      <div key={index} style={{ height: 10, width: 10, background: 'darkgreen', margin: 1 }}></div>
    ))}
  </div>
);

export default Tree;
