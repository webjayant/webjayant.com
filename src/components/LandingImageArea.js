import React from 'react'
import landingStyles from "../styles/components/landing.module.scss"
export default function LandingImageArea(props) {
    return (
        <div className={`${landingStyles.image__display__area} ${(props.style)?props.style:''}`}>
        </div>
    )
}