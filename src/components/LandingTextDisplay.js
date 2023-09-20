import React from 'react'
import landingStyles from "../styles/components/landing.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faInstagram, faTwitter, faStackOverflow, faCodepen, faDev, faAngellist, faGithub } from '@fortawesome/free-brands-svg-icons'
export default function LandingTextDisplay(props) {
    return (
        <div className={`${landingStyles.text__display__area} ${(props.style)?props.style:''}`}>
            <div>Hi,</div>
            <div>I'm <span>Jayant</span>,</div>
            <div>Web Developer.</div>
            <div className={landingStyles.social__display__area}>
                <a href="https://www.facebook.com/webjayant" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
                <a href="https://www.linkedin.com/in/webjayant/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="https://www.instagram.com/webjayant/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="https://twitter.com/webjayant" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="https://stackoverflow.com/users/6890449/webjayant" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faStackOverflow} /></a>
                <a href="https://codepen.io/webjayant" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faCodepen} /></a>
                <a href="https://dev.to/webjayant" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faDev} /></a>
                <a href="https://angel.co/u/webjayant" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faAngellist} /></a>
                <a href="https://github.com/webjayant" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
            </div>
        </div>
    )
}