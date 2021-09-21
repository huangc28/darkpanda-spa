import 'bootstrap/dist/css/bootstrap.min.css'
import { css } from '@emotion/react'
import { Container, Row, Col } from 'react-bootstrap'

import GlobalStyles from 'Darkpanda/styles/global.js';

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
  height: 100vh;
` 

const absoluteCenterContainer = css `
  position: absolute;
  left: 50%;
  top: 50%;
`

const contentContainer = css`
  position: relative;
  left: -50%;
  display: flex;
  flex-direction: column;
`

const slogan = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  img {
    height: 5px;
    width: 38px;
  }
  
  div {
    font-size: 13px;
    color: white;
    white-space: nowrap;
    font-family: Roboto;
  }
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

function SloganBar() {
  return (
    <div css={slogan}>
      <img src='https://darkpanda.love/wp-content/uploads/2019/05/bar.png' /> 
      <div>
        YOUR BEST COMPANIAN
      </div>
      <img src='https://darkpanda.love/wp-content/uploads/2019/05/bar.png' /> 
    </div>
  )
}

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
        <div css={absoluteCenterContainer}>
          <div css={contentContainer}> 
            {/* Slogan  */}
            <SloganBar />
          
            {/* Company name */}
            <div css={css`
              display: flex;
              justify-content: center; 
            `}>
              <h2 css={css`
                color: white;
                margin-bottom: 0;
                font-size: 39px;
                white-space: nowrap; 
                line-height: 0.9;
              `}> 
                DARKPANDA 
              </h2>
            </div>
          
            {/* Logo image  */}
            <div css={
              css`
                margin-top: 10px;
                display: flex; 
                justify-content: center;
                img {
                  height: 56px;
                  width: 56px;
                }
              `
            }> 
              <img 
                src="https://darkpanda.love/wp-content/uploads/2021/08/logo2@2x.png" 
              />
              
            </div> 
          </div>
        </div>
      </section>
      
      {/* Download Links */}
      <section css={css`
        background-color: #100F27;
      `}>
        <Container css={css`
          padding: 70px 15px 40px; 
          
        `}>
          <Row>
            <Col sm>
              <div css={linkContainer}>
                <img src='https://darkpanda.love/wp-content/uploads/2021/08/android-download.png' />
              </div>
            </Col>
            <Col sm>
              <div css={linkContainer}>
                <img src='https://darkpanda.love/wp-content/uploads/2021/08/apple-download.png' />
              </div>
            </Col>
          </Row>
        </Container>
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