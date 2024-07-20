// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: #f5f5f5;
    color: #333;
    line-height: 1.6;
  }

  nav {
    background-color: #333;
    padding: 1rem;
    display: flex;
    justify-content: space-around;
  }

  nav a {
    color: #fff;
    text-decoration: none;
    font-size: 1.2rem;
  }

  nav a:hover {
    color: #f5a623;
  }

  .container {
    max-width: 1200px;
    margin: 2rem auto;
    padding: 1rem;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  }

  h1, h2, h3 {
    margin-bottom: 1rem;
    color: #333;
  }

  p {
    margin-bottom: 1rem;
    color: #666;
  }

  button {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    color: #fff;
    background-color: #333;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #f5a623;
  }
`;

export default GlobalStyles;
