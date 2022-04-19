import { Col } from 'rsuite'
import { css } from '@emotion/react'
import PropTypes from 'prop-types'

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

function StepContent(props) {
  return (
    <Col 
      xs={24} 
      sm={8}
    >
      <div css={cardBox}>
        <div css={card}>
          <img 
            css={css`
              height: 574px;
              width: 288px
            `}
            src={props.image}
          />

          <div>
            <h4> 
              {props.label}
            </h4>

            <p>
              {props.description}
            </p>
          </div>
        </div>
      </div>
    </Col>
  )
}

StepContent.propTypes = {
  image: PropTypes.string,
  label: PropTypes.string,
  description: PropTypes.string,
}

export default StepContent