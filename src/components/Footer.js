import React from 'react'
import footerStyles from "../styles/components/footer.module.scss"
export default function Footer() {
    return (
        <div>
            <footer className={footerStyles.footer}>
                <p>
                    &copy; webjayant, 2020
                </p>
            </footer>
        </div>
    )
}