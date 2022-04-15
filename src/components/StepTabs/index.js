import { css } from '@emotion/react'
import { Grid, Row, Col } from 'rsuite'

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

function StepTabs() {
  return (
    <div>
      <div css={tabButtonPanels}>
        <ul>
          <li css={css`
            ${tabItem}
            ${selected}`
          }> 
            <div>
              <button>
                女生 
              </button>
            </div>
          </li> 
          <li css={tabItem}> 
            <div>
              <button>
                男生 
              </button>
            </div>
          </li>
        </ul>
      </div>
      
      {/* Tab content */}
      <div css={tabContentPannel}>
        <div css={tabContentInner}> 
          <Grid fluid>
            <Row>
              <Col xs={24} sm={8}>
                <div css={cardBox}>
                  <div css={card}>
                    <img 
                      css={css`
                        max-width: 100%;
                      `}
                      src='https://via.placeholder.com/590x332.png'
                    />
                    
                    <div>
                      <h4> 
                        收到需求邀請
                      </h4>
                      
                      <p>
                        有男生對你有興趣喔! 看看他的需求吧。
                      </p>
                    </div>
                  </div>
                </div>
              </Col>

              <Col xs={24} sm={8}>
                <div css={cardBox}>
                  <div css={card}>
                    <img 
                      css={css`
                        max-width: 100%;
                      `}
                      src='https://via.placeholder.com/590x332.png'
                    />

                    <div>
                      <h4> 
                        開始聊天
                      </h4>

                      <p>
                        開始跟男生聊聊吧。
                      </p>
                    </div>
                  </div>
                </div>
              </Col>

              <Col xs={24} sm={8}>
                <div css={cardBox}>
                  <div css={card}>
                    <img 
                      css={css`
                        max-width: 100%;
                      `}
                      src='https://via.placeholder.com/590x332.png'
                    />
                    
                    <div>
                      <h4> 
                        準備相遇吧
                      </h4>

                      <p>
                        看樣子你們很合得來。約個時間地點，準備跟他相遇吧！
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>

          </Grid>
        </div>
      </div>
    </div>
  )
}

export default StepTabs