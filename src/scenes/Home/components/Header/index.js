import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { Button } from 'rsuite'

import LogoImageCircle from './images/logo-circle.png'

const Stuff = styled.div`
  width: 9px;
`

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

function Header({ onClickDownload }) {
  return (
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
              onClick={onClickDownload}
            >
              立刻下載
            </Button>
          </div>
        </div>
      </header>
  )
}

Header.propTypes = {
  onClickDownload: PropTypes.func,
}

export default Header