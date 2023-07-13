import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap');

        html,
        body,
        #__next,
        main {
          height: 600px;
          width: 500px;
          margin: 0px !important;
          font-family: 'Noto Serif', serif;
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
          background-color: #fff;
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
