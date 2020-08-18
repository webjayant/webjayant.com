import React, { useState, useEffect } from 'react'
import Layout from "../components/Layout"
import LandingTextDisplay from '../components/LandingTextDisplay'
import LandingImageArea from '../components/LandingImageArea'
import aboutStyles from "../styles/pages/about.module.scss"
import ProgressBar from "../components/ProgressBar"
import Resume from "../../static/pdf/Resume__Jayant_Raj_SIngh.pdf"

export default function About() {
    const [hasRan, setHasRan] = useState(false)
    const [screenSize, setScreenSize] = useState({
      height: 0,
      width: 0,
    })
    const updateScreenSize = () => {
      setScreenSize({ width: window.innerWidth, height: window.innerHeight })
    }
    useEffect(() => {
      if (!hasRan) {
        setHasRan(true)
        updateScreenSize()
      }
      window.addEventListener("resize", updateScreenSize)
      return () => {
        window.removeEventListener("resize", updateScreenSize)
      }
    }, [screenSize])
    return (
        <Layout page="about" bgColor="inherit">
            <div className={aboutStyles.about__wrapper}>
                <div className={aboutStyles.maindiv}>
                    <div className={aboutStyles.hero__display}>
                        <LandingTextDisplay style={aboutStyles.text__display__area}/>
                        <LandingImageArea style={aboutStyles.image__display__area}/>
                    </div>
                    <div className={aboutStyles.slider__display__area}>
                        <ProgressBar title='html' width='95'/>
                        <ProgressBar title='css' width='95'/>
                        <ProgressBar title='javascript' width='95'/>
                        <ProgressBar title='jquery' width='95'/>
                        <ProgressBar title='vue' width='90'/>
                        <ProgressBar title='react' width='90'/>
                    </div>
                    {
                        (screenSize.width < 768)
                        ?(<div className={aboutStyles.download__resume}>
                            <a href={Resume} download target="_blank">Download My Resume</a>
                        </div>)
                        :''
                    }
                </div>
                {
                    (screenSize.width > 768)
                    ?(<div className={aboutStyles.right__display}>
                        <iframe className={aboutStyles.iframe} src={Resume} frameborder="0"></iframe>
                    </div>)
                    :''
                }
            </div>
        </Layout>
    )
}