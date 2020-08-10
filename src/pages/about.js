import React from 'react'
import Layout from "../components/Layout"
import LandingTextDisplay from '../components/LandingTextDisplay'
import LandingImageArea from '../components/LandingImageArea'
import aboutStyles from "../styles/pages/about.module.scss"
import ProgressBar from "../components/ProgressBar"
import Resume from "../../static/pdf/Resume__Jayant_Raj_SIngh.pdf"

export default function About() {
    return (
        <Layout page="about" bgColor="inherit">
            <div className={aboutStyles.about__wrapper}>
                <div className={aboutStyles.maindiv}>
                    <div className={aboutStyles.hero__display}>
                        <LandingTextDisplay style={aboutStyles.text__display__area}/>
                        <LandingImageArea style={aboutStyles.image__display__area}/>
                    </div>
                    <div className={aboutStyles.slider__display__area}>
                        <ProgressBar title='html' width='90'/>
                        <ProgressBar title='css' width='90'/>
                        <ProgressBar title='javascript' width='90'/>
                        <ProgressBar title='jquery' width='90'/>
                        <ProgressBar title='vue' width='80'/>
                        <ProgressBar title='react' width='80'/>
                    </div>
                    {
                        (window.innerWidth < 768)
                        ?(<div className={aboutStyles.download__resume}>
                            <a href={Resume} download target="_blank">Download My Resume</a>
                        </div>)
                        :''
                    }
                </div>
                {
                    (window.innerWidth > 768)
                    ?(<div className={aboutStyles.right__display}>
                        <iframe className={aboutStyles.iframe} src={Resume} frameborder="0"></iframe>
                    </div>)
                    :''
                }
            </div>
        </Layout>
    )
}