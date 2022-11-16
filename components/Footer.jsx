import React from 'react'

import {AiFillInstagram,AiOutlineGithub} from 'react-icons/ai'
const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 GUNE Headphones All rights reserverd</p>
      <p className="icons">
        <a href="https://www.instagram.com/__avk__07/">
        <AiFillInstagram/>
        </a>
      <a href="https://github.com/CodeAvk">
      <AiOutlineGithub/>
      </a>
     
      </p>
    </div>
  )
}

export default Footer
