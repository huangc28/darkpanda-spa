import { useState } from 'react'
import { css } from '@emotion/react'
import { Grid, Row } from 'rsuite'

import StepContent from './components/StepContent'

import inquiryChatPNG from './images/inquiry_chat.png'
import pickupInquiryPNG from './images/pickup_inquiry.png'
import girlsPNG from './images/girls.png'
import receivetPNG from './images/receive.png'
import chatPNG from './images/chating.png'
import meetupFemalePNG from './images/meetup_female.png'
import requestePNG from './images/request.png'
import interestedePNG from './images/interested.png'
import meetupMalePNG from './images/meetup_male.png'

const tabButtonPanels = css`
  ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
  }

  ul > li > div > button {
    background: transparent;
    padding: 0;
    margin: 0;
    border: 0 none;
  }
`

const selected = css`
  background: #1e1e1e;
`

const tabItem = css`
  cursor: pointer;
  padding: 20px 24px;
  font-size: 18px; 
  font-weight: 700;
  color: #acacac;
  line-height: 1.67;
`

const tabContentPannel = css`
  background: #1e1e1e;  
`
const tabContentInner = css`
  padding: 35px;
` 

const displayNone = css` 
  display: none;
`

const MaleTab = 0
const FemaleTab = 1

const TabLabels = {
  [FemaleTab]: '女生',
  [MaleTab]: '男生',
}

const TabContents = {
  [MaleTab]: [
    {
      image: requestePNG,
      label: '提出需求',
      description: '透過隨機配對或指定配對，提出您想要的相遇條件，等待對您有興趣的女生',
    },
    {
      image: interestedePNG,
      label: '女生有興趣詢問',
      description: '女生對你的需求有興趣。跟她聊聊吧',
    },
    {
      image: meetupMalePNG,
      label: '聊天並相遇吧',
      description: '雙方約個時間地點，準備與他相遇吧',
    },
  ],
  [FemaleTab]: [
    {
      image: receivetPNG,
      label: '收到需求邀請',
      description: '有男生對你有興趣喔! 看看他的需求吧',
    },
    {
      image: chatPNG,
      label: '開始聊天',
      description: '開始跟男生聊天吧',
    },
    {
      image: meetupFemalePNG,
      label: '準備相遇吧',
      description: '看樣子你們很合得來。約個時間地點，準備跟她相遇吧！',
                              
    },
  ],
}

// - Each tab content should have it's own index. When press on tab button panel, display that content.
function StepTabs() {
  const [tab, setStep] = useState(FemaleTab);
  
  const handleChangeTab = (tabIdx) => {
    setStep(tabIdx)
  }

  return (
    <div>
      <div css={tabButtonPanels}>
        <ul>
          {
            [
              FemaleTab,
              MaleTab, 
            ].map((currTab, key) => {
              return(
                <li 
                  key={key}
                  css={css`
                    ${tabItem}
                    
                    ${
                      currTab === tab
                        ? selected
                        : ''
                    }
                  `}
                  onClick={() => handleChangeTab(currTab)}
                > 
                  <div>
                    <button>
                       { TabLabels[currTab] }
                    </button>
                  </div>
                </li> 
              )
            })
          }
        </ul>
      </div>
      
      {/* Tab content */}
      <div css={tabContentPannel}>
        <div css={tabContentInner}> 
          <Grid fluid>
            {
              [
                FemaleTab,
                MaleTab, 
              ].map((currTab, idx) => {
                const stepContent = TabContents[currTab]
                  return (
                    <Row
                      key={idx}
                      css={
                        tab !== currTab 
                          ? displayNone 
                          : '' 
                      }
                      xs={24}   
                      sm={8}
                    > 
                      {
                        stepContent.map((content, idx) => (
                          <StepContent 
                            key={idx}
                            image={content.image}  
                            label={content.label}
                            description={content.description}
                          />
                        ))
                      }
                    </Row>
                  )
              })
            }
          </Grid>
        </div>
      </div>
    </div>
  )
}

export default StepTabs