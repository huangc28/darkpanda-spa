import { Grid, Row, Col } from 'rsuite'
import { css } from '@emotion/react'

const footerStyles = css`
  padding: 20px 0;
  border-top: 1px solid hsla(0, 0%, 100%, 0.1);
  background: rgba(0, 0, 0, 0.3);
` 
const navStyles = css`
  ol {
    margin: 0;
    list-style-type: none;
    padding-left: 0;
  }

  ol > li {
    display: inline-block;
    padding: 10px;
    margin-right: 3px;
  } 

  ol > li:hover {
    cursor: pointer;
  }

  ol > li > a {
    font-size: 14px;
  } 
`

function Footer() {
  return (
    <footer css={footerStyles}>
      <Grid fluid>
        <Row>
          <Col xs={20} xsPush={2}>
            <nav css={navStyles}>
              <ol>
                <li>
                  <a> 隱私政策 </a>
                </li>
                <li>
                  <a>  條款 </a>
                </li>
                <li>
                  <a> 聯絡我們 </a>
                </li>
              </ol>
            </nav>
          </Col> 
        </Row>
      </Grid>
    </footer>
  )
}

export default Footer