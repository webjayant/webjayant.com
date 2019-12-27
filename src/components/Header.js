import React, {useRef, useEffect} from "react"
import { Link } from "gatsby"
import {TimelineMax} from 'gsap'
import headerStyles from "../styles/components/header.module.scss"
import "../../node_modules/scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap";
import "../../node_modules/scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators";
import ScrollMagic from "scrollmagic";


export default function Header(props) {
  let headerItem, mainLogo, logoEnglish, leftLinks = useRef(null)
  let controller = new ScrollMagic.Controller();
  useEffect(()=>{
    let tl = new TimelineMax()
    let headerShadow = tl.to(headerItem, 0.3,{
      boxShadow:'0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.3)',
      background: 'red',
      color:'#fff'
    }).to(mainLogo, 0.3, {
      color:'#fff',
      delay: -0.3
    }).to(logoEnglish, 0.3, {
      color:'#2d0f0f',
      delay: -0.3
    }).to(leftLinks, 0.3,{
      color:'#fff',
      delay: -0.3
    })
    new ScrollMagic.Scene({
      triggerElement: '.BlogArea',
    })
    .setTween(headerShadow)// pins the element for the the scene's duration
    .addTo(controller);
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
          <h1 ref = {el => (mainLogo = el)} className={headerStyles.main_logo}><span ref = {el => (logoEnglish = el)} className={headerStyles.english}>Web</span>जयन्त</h1>
        </Link>
        <div ref={el => (leftLinks = el)} className={headerStyles.left__links}>   
          <Link to="/about">
            About
          </Link>
          <Link to="/blog">
            Blog
          </Link>
        </div>
      </nav>
    </header>
  )
}