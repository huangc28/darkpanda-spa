import { css } from '@emotion/react'
import facepaint from 'facepaint'

import { Large, Medium, Small } from 'Darkpanda/styles/breakpoints'
import LogoImage from './logo-circle.png'

const mq = facepaint(
  [Small, Medium, Large].map(bp => `@media screen and (min-width: ${bp}px)`)
)

const absoluteCenterContainer = css `
  position: absolute;
  left: 50%;
  top: 30%;
`

const contentContainer = css`
  position: relative;
  left: -50%;
  top: -30%;
  display: flex;
  flex-direction: column;
`

const logoImage = css`
  margin-top: 10px;
  display: flex; 
  justify-content: center;
  img {
    height: 56px;
    width: 56px;
  }
`

const sloganContainer = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

function SloganBar() {
  const imgMqCss = mq({
    height: [5, 9, 13],
    width: [38, 68, 91],
  })

  const sloganText = mq({
    fontSize: [13, 14, 19],
    color: 'white',
    whiteSpace: 'nowrap',
    fontFamily: 'Roboto',
  })
  
  return (
    <div css={sloganContainer}>
      <img 
        css={imgMqCss}
        src='https://darkpanda.love/wp-content/uploads/2019/05/bar.png' 
      /> 

      <div css={sloganText}>
        YOUR BEST COMPANIAN
      </div>

      <img 
        css={imgMqCss} 
        src='https://darkpanda.love/wp-content/uploads/2019/05/bar.png' 
      />
    </div>
  )
}

function LogoContent () {
  return (
    <div css={absoluteCenterContainer}>
      <div css={contentContainer}> 
        {/* Slogan  */}
        <SloganBar />
      
        {/* Company name */}
        <div css={css`
          display: flex;
          justify-content: center; 
        `}>
          <h2
            css={mq({
              color: 'white',  
              marginBottom: 0,
              fontSize: [39, 55, 76],
              whiteSpace: 'nowrap',
              lineHeight: 0.9,
            })}
          >
            DARKPANDA 
          </h2>

        </div>

        {/* Logo image  */}
        <div css={css`
          margin-top: 20px;
          display: flex; 
          justify-content: center;
        `}> 
          <img 
            css={mq({
              height: [80, 113, 150],
              width: [80, 113, 150],
            })}
            src={LogoImage}
          />
        </div>
      </div>
    </div>
  )
}

export default LogoContent