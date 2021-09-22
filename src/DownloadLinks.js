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

function DownloadLinks() {
  return (
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
           <div css={css`
             ${linkContainer};
              ${mq({
                marginTop: [36, 0, 0],
              })}
           `}>l
             <img src='https://darkpanda.love/wp-content/uploads/2021/08/apple-download.png' />
           </div>
         </Col>
       </Row>
     </Container>
  )

}

export default DownloadLinks