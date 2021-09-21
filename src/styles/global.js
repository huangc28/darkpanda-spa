import { Global, css } from '@emotion/react'

const dpBgImgUrl = 'https://darkpanda.love/wp-content/uploads/2021/08/10464-free-download-download-abstract-color-waves-abstract-wallpaper.jpg'

function GlobalStyle(props) {
  return <Global 
    styles={css`
      html, body {
        overflow-x: hidden;
      }
    
      body {
        background: url(${dpBgImgUrl}) no-repeat center center fixed; 
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