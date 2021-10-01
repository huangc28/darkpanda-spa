import { Global, css } from '@emotion/react'

import dpBgImg from 'Darkpanda/images/wallpaper.jpg'

function GlobalStyle(props) {
  return <Global 
    styles={css`
      html, body {
        overflow-x: hidden;
      }
    
      body {
        background: url(${dpBgImg}) no-repeat center center fixed; 
        background-size: cover;
        height: 100%;
        overflow: hidden;
        position: relative;
      }
    `}
    
    {...props}
  />
}

export default GlobalStyle