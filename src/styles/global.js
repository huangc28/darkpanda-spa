import { Global, css } from '@emotion/react'

import dpBgImg from 'Darkpanda/images/wallpaper.jpg'

function GlobalStyle(props) {
  return <Global 
    styles={css`
      html, body {
        overflow-x: hidden;
      }
      
      body {
        background-color: rgb(6, 6, 6);
        box-sizing: border-box;
        color: rgb(172, 172, 172);
      }
    `}
    
    {...props}
  />
}

export default GlobalStyle