import 'bootstrap/dist/css/bootstrap.min.css'
import 'rsuite/dist/rsuite.min.css'
import { Grid, Row, Col, Button } from 'rsuite'
import { useRef } from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

import Seperator from 'Darkpanda/components/Seperator'
import Footer from 'Darkpanda/components/Footer'
import StepTabs from 'Darkpanda/components/StepTabs'

import LogoImageCircle from './logo-circle.png'
import LogoImageLarge from './logo-large.png'

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

const mainContainer = css`
  padding: 70px 0 50px 0;
`

const gradientTheme = css`
  background-image: linear-gradient(95deg, rgb(5, 157, 255) 15%, rgb(101, 73, 213) 45%, rgb(227, 63, 161) 75%, rgb(251, 83, 67) 100%);
  background-clip: text;
  text-fill-color: transparent;
`

const description = css`
  text-align: center;
  padding: 0 1%;
  margin-bottom: 30px;
  font-size: 20px; 
`

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
              src={LogoImageCircle}
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
              立刻下載
            </Button>
          </div>
        </div>
      </header>

      <main css={mainContainer}>
        <div css={css`
          display: flex; 
          justify-content: center;
        `}>
          {/* Darkpanda bigger logo  */}
          <div css={css`
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: white;
            height: 280px;
            width: 280px;
            border-radius: 50%;
          `}>
            <img 
              css={css`
                height: 220px;
                width: 220px;
              `}
              src={LogoImageLarge}
            />
          </div>
        </div>

        {/* Slogan text */}
        <h1 css={css`
          width: 100%;
          margin: 20px 0 25px 0;
          display: inline-block;
          text-align: center;
          color: white;
        `}>
          <span css={gradientTheme} > 男生 </span> & 
          <span css={gradientTheme}> 女生 </span>
          <br/> 快來速約吧
        </h1>

        <p css={description}>
          不囉唆，馬上相遇吧
        </p>

        <Seperator />
        
        {/* Step demonstration pannel */}
        <section>
          <Grid fluid>
            <Row>
              <Col xs={20} xsPush={2}>
                <div css={css`
                  display: flex;
                  justify-content: center;
                `}>
                  <h2>
                    快速認識朋友
                  </h2>
                </div>
              </Col>
            </Row>  

            {/* Steps Tab Pannel */}
            <Row>
              <Col xs={20} xsPush={2}>
                <StepTabs />
              </Col>
            </Row>
          </Grid>
        </section>

        <section
          css={css`
            margin: 1rem 0;
          `}
        
        >
          <Grid fluid>
            <Row>
              <Col xs={20} xsPush={2}>
                <div css={css`
                  display: flex;
                  align-items: center;
                  justify-content: flex-start;
                `}>
                  <h2 css={css`flex-grow: 1`}>
                    下載 APP! 
                  </h2>
                  <div css={css`flex-grow: 3`}> 
                    <a 
                      href='https://play.google.com/store/apps/details?id=com.darkpanda.app&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'
                    >
                      <img 
                        css={css`
                          width: 176px;
                          height: 80px;
                        `}
                        alt='Get it on Google Play' 
                        src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'
                      />
                    </a>
                  </div>
                  <div css={css`flex-grow: 6`} />
                </div>
              </Col>
            </Row>
          </Grid>        
        </section> 
      </main> 
      
      <Footer />
    </>
  )
}

export default App