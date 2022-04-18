import { useState } from 'react'
import { css } from '@emotion/react'
import { Grid, Row, Col } from 'rsuite'

import StepContent from './components/StepContent'

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

const cardBox = css`
  padding: 0 5px;
  height: 100%;
`
const card = css`
  box-shadow: 4px 4px 20px 20px rgba(0, 0, 0, 0.01);
  background-color: #0f0f11;
  padding: 20px;
  border-radius: 5px;
  height: 100%;
  
  div {
    padding-top: 20px;
  }
  
  div > h4 {
    font-size: 18px;
    margin-bottom: 20px;
  }
  
  div > p {
    font-size: 18px;
    line-height: 1.67;
  }
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
      image: 'https://via.placeholder.com/590x332.png',
      label: '提出需求',
      description: '',
    },
    {
      image: 'https://via.placeholder.com/590x332.png',
      label: '女生有興趣詢問',
    },
    {
      image: 'https://via.placeholder.com/590x332.png',
      label: '聊天並相遇吧',
    },
  ],
  [FemaleTab]: [
    {
      image: 'https://via.placeholder.com/590x332.png',
      label: '收到需求邀請',
      description: '有男生對你有興趣喔! 看看他的需求吧。',
    },
    {
      image: 'https://via.placeholder.com/590x332.png',
      label: '開始聊天',
      description: '開始跟男生聊天吧',
    },
    {
      image: 'https://via.placeholder.com/590x332.png',
      label: '準備相遇吧',
      description: '看樣子你們很合得來。約個時間地點，準備跟他相遇吧！',
                              
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