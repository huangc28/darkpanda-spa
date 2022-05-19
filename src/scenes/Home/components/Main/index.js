import { css } from '@emotion/react'
import { Grid, Row, Col } from 'rsuite'

import Seperator from 'Darkpanda/components/Seperator'

import LogoWhiteSVG from './images/logo_white.svg'
import StepTabs from './components/StepTabs'
import AppScreen from './images/app_screen_iphone.png'

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

const mainContainer = css`
  padding: 70px 0 50px 0;
`

function Main({ innerRef }) {
  return (
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
            height: 280px;
            width: 280px;
            border-radius: 50%;
          `}>
            <img 
              css={css`
                height: 220px;
                width: 220px;
              `}
              src={LogoWhiteSVG}
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
                  color: white;
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

        <Seperator />

        <section
          css={css`
            margin: 1rem 0;
          `}
        
        >
            <h1 css={css`
            width: 100%;
            margin: 20px 0 25px 0;
            display: inline-block;
            text-align: center;
            color: white;
            `}>
                全台最快配對的交友軟件
            </h1>

            <div css={css`
            display: flex; 
            justify-content: center;
            `}>

            {/* Darkpanda iphone screen  */}
            <div css={css`
                display: flex;
                justify-content: center;
                align-items: center;
                height: 750px;
                border-radius: 50%;
            `}>
                <img 
                css={css`
                    height: 700px;
                    width: 900px;
                `}
                src={AppScreen}
                />
            </div>
            </div>        
        </section>

        <Seperator />

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
                  <h2 
                    css={css`flex-grow: 1`}
                    ref={innerRef}
                  >
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
  )
}

export default Main