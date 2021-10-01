import { useEffect, useReducer } from 'react'
import axios from 'axios' 
import { Container, Row, Col } from 'react-bootstrap'
import { css } from '@emotion/react'
import facepaint from 'facepaint'

import { Large, Medium, Small } from 'Darkpanda/styles/breakpoints'

const mq = facepaint(
  [Small, Medium, Large].map(bp => `@media screen and (min-width: ${bp}px)`)
)

const linkContainer = css`
  display: flex;
  justify-content: center;
`

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_ANDROID_INSTALL_URL':
      const {
        payload: {
          installUrl,
        },
      } = action
      
      
      return {
        ...state,
        installUrl,
      } 
    default:
      return state
  }
}

function DownloadLinks() {
  const [state, dispatch] = useReducer(reducer, {
    installUrl: '',
  })
   
  
  useEffect(() => {
    axios.get('http://localhost:3002/v1/release/android/latest')
      .then(resp => {
        const {
          data: {
            install_url: installUrl,
          },
        } = resp

        dispatch({
          type: 'UPDATE_ANDROID_INSTALL_URL',
          payload: {
            installUrl,
          },
        })
      })
  }, [])
  
  return (
    <Container css={css`
      padding: 40px 15px 40px; 
    `}>
      <Row>
        <Col sm>
          <div css={css`
           ${linkContainer}
           ${mq({
             justifyContent: ['center', 'flex-end', 'flex-end'],
             paddingRight: [0, 0, 20]
           })}
          `}>
            <a 
              href={state.installUrl}
              target='_blank'
            >
              <img src={require('./images/android-download.png')} />
            </a>
          </div>
        </Col>
        <Col sm>
          <div css={css`
            ${linkContainer};
             ${mq({
               marginTop: [36, 0, 0],
               justifyContent: ['center', 'flex-start', 'flex-start'],
               paddingLeft: [0, 0, 20]
             })}
          `}>l
             <a 
               href='https://install.appcenter.ms/orgs/darkpanda/apps/darkpanda-1/distribution_groups/public'
               target='_blank'
             >
               <img src={require('./images/apple-download.png')} />
             </a>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default DownloadLinks