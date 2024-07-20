// src/components/Plant.js
import React from 'react';
import styled, { keyframes } from 'styled-components';

const grow = keyframes`
  0% { height: 0; }
  100% { height: 100%; }
`;

const PlantContainer = styled.div`
  width: 50px;
  height: 200px;
  border: 2px solid green;
  position: relative;
  overflow: hidden;
`;

const PlantStem = styled.div`
  width: 100%;
  background-color: green;
  height: ${({ progress }) => progress}%;
  animation: ${grow} 1s linear;
  position: absolute;
  bottom: 0;
`;

const Plant = ({ progress }) => {
  return (
    <PlantContainer>
      <PlantStem progress={progress} />
    </PlantContainer>
  );
};

export default Plant;
