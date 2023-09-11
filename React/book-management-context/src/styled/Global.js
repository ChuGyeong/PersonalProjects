import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`

  ${reset}

  /* other styles */
  body {
    font-size: 18px;
    line-height: 1.6;
    font-family: 'Noto Sans KR', sans-serif;
    color: #000;
    background: #F3A950
  }
  a {text-decoration: none;
    color: #000
  }
`;

export default GlobalStyle;
