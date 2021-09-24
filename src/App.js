import 'bootstrap/dist/css/bootstrap.min.css'
import 'rsuite/dist/styles/rsuite-default.css';
import { useRef } from 'react'
import { css } from '@emotion/react'
import facepaint from 'facepaint';

import { Small, Medium, Large } from 'Darkpanda/styles/breakpoints'
import GlobalStyles from 'Darkpanda/styles/global';

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

const downloadOption = css`
  display: flex;
  justify-content: center;
  flex: 1;
  color: white;
  cursor: pointer;
  
  & > a, a:hover, a:visited, a:link, a:active {
    font-size: 14px;
    font-weight: 800;
    outline-style: none;
    color: #FFFFFF;
    text-decoration: none;
  }
`

const bodySec = css`
  height: 800px;
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

const mq = facepaint(
  [Small, Medium, Large].map(bp => `@media screen and (min-width: ${bp}px)`)
)

function App() {
  const handleClickLogo = evt => {
    evt.preventDefault()
  }

  const dlRef = useRef(null)
  const executeScrollToDL = () => dlRef.current.scrollIntoView()

  const handleClickDownloadNow = evt => {
    evt.preventDefault()
    executeScrollToDL()
  } 
  
  
  return (
    <>
      <GlobalStyles />
      
      <header css={headerStyles}>
        <h1 css={css`
            ${logo}
            ${mq({
              display: ['none', 'none', 'none'],
            })}
          `
        }>
          <a onClick={handleClickLogo}> 
            DARKPANDA    
          </a>
        </h1>
        
        <div css={css`
          ${downloadOption}
        `}>
          <a onClick={handleClickDownloadNow}> DOWNLOAD NOW! </a>
        </div>
        
        <div css={css`
          flex:1
          ${
            mq({
              display: ['none', 'none', 'block'],
            })
          }
        `} />
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
      
      <footer 
        css={footerContainer}
        ref={dlRef}
      >
        <span>
          Darkpanda © copyright 2021. All Rights Reserved.
        </span>
      </footer> 
    </>
  )
}

export default App