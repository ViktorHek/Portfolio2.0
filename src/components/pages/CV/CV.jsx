import React from 'react'
import './CV.css'
import '../GlobalPageStyle.css'
import How from '../how/How'

const CV = () => {
  return (
    <div className="CV_page_container">
        <img src="/images/CV_VK.jpg" alt="CV" className="CV_img"/>
        <img src="/images/PB_VK.jpg" alt="Personligt Brev" className="CV_img"/>
        <How />
    </div>
  )
}

export default CV
