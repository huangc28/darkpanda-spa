import 'bootstrap/dist/css/bootstrap.min.css'
import 'rsuite/dist/rsuite.min.css'
import Button from 'rsuite/Button'
import { useRef } from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import facepaint from 'facepaint'

import { Small, Medium, Large } from 'Darkpanda/styles/breakpoints'
import GlobalStyles from 'Darkpanda/styles/global'

import LogoImage from './logo-circle.png'

const headerStyles = css`
  max-width: 100%;
  height: 80px;
  background-color: rgba(6, 6, 6, 0.7);
  border-bottom: 1px solid rgba(255,255,255,0.1);
  display: flex;
  align-items: center;
  padding: 0 30px 0;
  flex: 1;
}
`

const headerContainer = css`
  width: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  color: white;
  margin: 0 5% 0 5%;
`

const leftContainer = css`
  display: flex;
  align-item: center;
  justify-content: flex-start;
`

const rightContainer = css`
  display: flex;
  align-item: center;
  justify-content: flex-end;
`


const mq = facepaint(
  [
    Small, 
    Medium, 
    Large
  ].map(bp => `@media screen and (min-width: ${bp}px)`)
)

const Stuff = styled.div`
  width: 9px;
`

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
      <header 
        css={headerStyles}
      >
        <div css={headerContainer}> 
          {/* Logo  */}
          <div css={leftContainer} >
            <img 
              css={css`
                height: 50px;
                width: 50px;
              `}
              src={LogoImage}
            />

            <Stuff />

            <h3
              css={css`
                color: 'white',  
                marginBottom: 0,
                whiteSpace: 'nowrap',
                lineHeight: 0.9,
              `}
            >
              DARKPANDA 
            </h3>
          </div>
          
          {/* Download button */}
          <div css={rightContainer}>
            <Button 
              appearance="default"
              css={css`
                background-image:linear-gradient(95deg, rgb(5, 157, 255) 15%, rgb(101, 73, 213) 45%, rgb(227, 63, 161) 75%, rgb(251, 83, 67) 100%);
                color:white;
              `}
            >
              Download Now
            </Button>
          </div>
        </div>
      </header>
    </>
  )
}

export default App