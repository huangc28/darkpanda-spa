import { createRef } from 'react'

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

function Home() {
  const downloadButtonRef = createRef()
  const executeScroll = () =>  downloadButtonRef.current.scrollIntoView()

  return (
    <>
      <Header onClickDownload={evt => {
        evt.preventDefault()
        executeScroll()
      }}/>

      <Main innerRef={downloadButtonRef} />

      <Footer />
    </> 
  )  
}

export default Home