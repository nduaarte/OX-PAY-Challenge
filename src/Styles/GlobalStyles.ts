import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    min-height: 100%;
    background: var(--background);
  }
  
  li { 
    list-style: none; 
  }
  
  *, button, input {
    border: none;
    background: none;
    font-family: Roboto, sans-serif;
  }
  :root {
    --primary: #AC4242;
    --secondary: #679F4C;
    --background: #F1F1F1;
    --lightGrey: #E1E1E1;
    --grey: #979797;
    --darkGrey: #6B6B6B;
    --darkerGrey: #3F3D3D;
  }
`;