import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');


        html,
        body,
        #__next,
        main {
          min-height: 37.5rem;
          height: 100%;
          min-width: 20rem;
          margin: 0px !important;
          font-family: 'Roboto', sans-serif;
          overflow: hidden;
        }
        ::-webkit-scrollbar {
          display: block;
          width: 0.25rem;
        }
        ::-webkit-scrollbar-track {
          diplsay: none;
        }
        ::-webkit-scrollbar-thumb {
          background-color: #000;
          border-radius: 1rem;
        }
        p {
          margin: 0 !important;
        }
        a{
          color: lightblue;
        }
      `;
export default GlobalStyle;
