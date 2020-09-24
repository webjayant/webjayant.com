import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import Helmet from "react-helmet"
import useSiteMetadata from "../static_queries/useSiteMetadata"
import layoutStyles from "../styles/components/layout.module.scss"
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import image from '../../static/me.jpg'
config.autoAddCss = false;

export default function Layout(props) {
  const { title, description } = useSiteMetadata()
  const imageUrl = `https://webjayant.com${props.image || image}`
  return (
    <section
      className={`${layoutStyles.layout} ${
        props.page === "info" && 
        layoutStyles.info_page}`}
      style={{
        backgroundColor: props.bgColor,
      }}
    >
      <Helmet>
        <html lang="en" />
        <title>{props.title || title}</title>
        <meta name="description" content={props.description || description} />
        <meta property="og:title" content={props.title || title} />
        <meta property="og:type" content={props.type || 'website'} />
        <meta property="og:description" content={props.description || description} />
        <meta name="og:image" content={imageUrl} />
        <meta property="twitter:title" content={props.title || title} />
        <meta property="twitter:card" content='summary_large_image' />
        <meta property="twitter:description" content={props.description || description} />
        <meta name="twitter:image" content={imageUrl} />
      </Helmet>
      <Header page={props.page} title={title} />
      <div className={layoutStyles.content}>{props.children}</div>
      <Footer/>
    </section>
  )
}