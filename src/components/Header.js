import React, {useRef, useEffect} from "react"
import { Link } from "gatsby"
import {TimelineMax} from 'gsap'
import headerStyles from "../styles/components/header.module.scss"
if (typeof window !== `undefined`) {
  require("../modules/scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap");
  // require ("../modules/scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators");
  var ScrollMagic  = require("scrollmagic");
}

export default function Header(props) {
    let headerItem, mainLogo, logoEnglish, leftLinks, logoLeft, logoRight, logoMed = useRef(null)
  if(ScrollMagic){
    var controller = new ScrollMagic.Controller();
  }
  useEffect(()=>{
    if(ScrollMagic){
      let tl = new TimelineMax()
      let headerShadow = tl.to(headerItem, 0.3,{
        'box-shadow':'0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.3)',
        'background': 'red',
        'color':'#fff'
      }).to(mainLogo, 0.3, {
        'color':'#fff',
        delay: -0.3
      }).to(logoEnglish, 0.3, {
        'color':'#2d0f0f',
        delay: -0.3
      }).to(leftLinks, 0.3,{
        'color':'#fff',
        delay: -0.3
      }).to(logoLeft, 0.3, {
        'fill':'#fff',
        delay: -0.3
      }).to(logoRight, 0.3, {
        'fill':'#fff',
        delay: -0.3
      }).to(logoMed, 0.3, {
        'fill':'#fff',
        delay: -0.3
      })
      new ScrollMagic.Scene({
        triggerElement: '.BlogArea',
      })
      .setTween(headerShadow)// pins the element for the the scene's duration
      .addTo(controller);
    }
  })  
  return (
    <header ref={el => (headerItem = el)}
      className={`${headerStyles.header} ${props.page === 'info' &&
        headerStyles.info_page}`}
    >
      <nav
        className={headerStyles.header__nav}
        role="navigation"
        aria-label="main navigation"
      >
        <Link to="/">
          <svg className={headerStyles.logo_svg} xmlns="http://www.w3.org/2000/svg" width="248" height="167" viewBox="0 0 248 167" fill="none">
            <path ref={el => (logoLeft = el)} d="M80.7983 15.0841L72.3571 6.64295C71.7713 6.05717 70.8216 6.05717 70.2358 6.64295L0.93934 75.9394C0.353554 76.5252 0.353553 77.475 0.939339 78.0607L70.2358 147.357C70.8216 147.943 71.7713 147.943 72.3571 147.357L80.7983 138.916C81.384 138.33 81.384 137.381 80.7983 136.795L21.3571 77.3536C21.1619 77.1584 21.1619 76.8418 21.3571 76.6465L80.7983 17.2054C81.3841 16.6196 81.384 15.6699 80.7983 15.0841Z" fill="#FF0000" stroke="#FF0000"/>
            <path ref={el => (logoMed = el)} d="M175.308 6.64295L166.65 15.301C166.064 15.8868 166.064 16.8366 166.65 17.4223L225.874 76.6465C226.069 76.8418 226.069 77.1584 225.874 77.3536L166.65 136.578C166.064 137.164 166.064 138.113 166.65 138.699L175.308 147.357C175.894 147.943 176.844 147.943 177.429 147.357L246.726 78.0607C247.312 77.475 247.312 76.5252 246.726 75.9394L177.429 6.64295C176.844 6.05717 175.894 6.05717 175.308 6.64295Z" fill="#FF0000" stroke="#FF0000"/>
            <path ref={el => (logoRight = el)} d="M93.6841 152.131C95.7647 152.261 97.7774 152.097 99.7134 151.627C102.259 151.104 104.509 149.886 106.439 148.028C108.47 146.211 110.092 143.669 111.375 140.533C112.68 137.344 113.606 133.332 114.192 128.554L129.855 0.992546C129.922 0.444378 130.421 0.0545627 130.969 0.121869L145.322 1.88421C145.87 1.95152 146.26 2.45046 146.193 2.99863L130.543 130.456C129.671 137.563 128.076 143.482 125.804 148.257L125.799 148.268L125.794 148.279C123.564 153.117 120.875 156.927 117.759 159.771C114.626 162.632 111.175 164.561 107.395 165.597L107.38 165.601L107.365 165.605C103.742 166.658 99.9621 166.991 96.0098 166.591C95.5831 166.548 95.2382 166.228 95.1514 165.808L92.5786 153.367C92.44 152.697 93.001 152.088 93.6841 152.131Z" fill="#FF0000"/>
          </svg>
          <h1 ref = {el => (mainLogo = el)} className={headerStyles.main_logo}><span ref = {el => (logoEnglish = el)} className={headerStyles.english}>Web</span>Jayant</h1>
        </Link>
        <div ref={el => (leftLinks = el)} className={headerStyles.left__links}>
          <Link to="https://jsnake.webjayant.app">
            j~Snake
          </Link>   
          <Link to="/about">
            About Me
          </Link>
        </div>
      </nav>
    </header>
  )
}