import 'bootstrap/dist/css/bootstrap.min.css'
import { css } from '@emotion/react'
import { Container, Row, Col } from 'react-bootstrap'

import GlobalStyles from 'Darkpanda/styles/global.js';

import LogoContent from './LogoContent';
import DownloadLinks from './DownloadLinks';

const logo = css`
  letter-spacing: -1.6px;
  margin-bottom: 0;
  padding: 0;
  text-decoration: none;
  color: white; 
  cursor: pointer;
  font-family: Oswald, sans-serif;
  font-size: 25.2571px; 
  font-weight: 600;
`

const headerStyles = css`
  width: 100%;
  height: 66px;
  border-bottom: 1px solid rgba(255,255,255,0.1);
  display: flex;
  align-items: center;
  padding: 0 30px 0;
  flex: 1;
}
`

const drawerContainer = css`
  display: flex;
  justify-content: flex-end;
  flex: 1;
  color: white;
  cursor: pointer;
`

const bodySec = css`
  height: 886px;
` 

const linkContainer = css`
  display: flex;
  justify-content: center;
`

const footerContainer = css`  
  display: flex;
  justify-content: center;
  background-color: #212529; 
  padding: 10px 8px;
  span {
    font-size: 11.34px;
    font-family: Montserrat, sans-serif;
    font-weight: 300;
    color: #777;
    line-height: 26px;
  }
` 

function App() {
  function handleClickLogo(evt) {
    evt.preventDefault()
    
    console.log('click logo')
  }
  
  return (
    <>
      <GlobalStyles />
      
      <header css={headerStyles}>
        {/* Label */}
        <h1 css={logo}>
          <a onClick={handleClickLogo}> 
            DARKPANDA    
          </a>
        </h1>
        
        {/* drawer */}
        <div css={drawerContainer}>
          drawer
        </div>
      </header>
      
      {/* Content Body */}
      <section css={bodySec}> 
        <LogoContent />
      </section>
      
      {/* Download Links */}
      <section css={css`
        background-color: #100F27;
      `}>
        <DownloadLinks />
      </section>
      
      <footer css={footerContainer}>
        <span>
          Darkpanda © copyright 2021. All Rights Reserved.
        </span>
      </footer> 
    </>
  )
}

export default App