import React from 'react'
import progressStyles from '../styles/components/progress.module.scss'
export default function ProgressBar(props) {
    return (
        <div className={progressStyles.progress__container}>
            <div className={progressStyles.progress__title}>{props.title}</div>
            <div className={progressStyles.progress__bar}>
                <div className={progressStyles.progress__bar__filled} style={{'width':`calc(${props.width}% + 1px)`}}></div>
            </div>
        </div>
    )
}