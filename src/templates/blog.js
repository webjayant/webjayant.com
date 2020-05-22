import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import useBlogData from '../static_queries/useBlogData'
import blogTemplateStyles from "../styles/templates/blog.module.scss"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight, faAngleDoubleLeft} from '@fortawesome/free-solid-svg-icons'
//this component handles the blur img & fade-ins
import Img from 'gatsby-image'

export default function Blog(props) {
  const data = props.data.markdownRemark
  const allBlogData = useBlogData()
  const nextSlug = getNextSlug(data.fields.slug)
  const previousSlug = getPreviousSlug(data.fields.slug)

  function getNextSlug(slug) {
    const allSlugs = allBlogData.map(blog => {
      return blog.node
    })
    let nextSlug = allSlugs.filter((el)=>{
      return el.fields.slug === slug
    })
    nextSlug = allSlugs[allSlugs.indexOf(nextSlug[0]) + 1]
    if(nextSlug !== undefined && nextSlug !== '') {
      return nextSlug
    } else {
      return allSlugs[0]
    }
  }
  function getPreviousSlug(slug) {
    const allSlugs = allBlogData.map(blog => {
      return blog.node
    })
    let previousSlug = allSlugs.filter((el)=>{
      return el.fields.slug === slug
   })
    previousSlug = allSlugs[allSlugs.indexOf(previousSlug[0]) - 1]
    if(previousSlug !== undefined && previousSlug !== '') {
      return previousSlug
    } else {
      return ''
    }
  }

  return (
    <Layout title={`WebJayant >> ${data.frontmatter.title}`} description={data.excerpt}>
      <article className={`BlogArea ${blogTemplateStyles.blog}`}>
        <div className={blogTemplateStyles.blog__info}>
          <h3>{data.frontmatter.date} / {data.frontmatter.author}</h3>
          <h1>{data.frontmatter.title}</h1>
        </div>
        <figure className={blogTemplateStyles.blog__hero}>
          <Img
            fluid={data.frontmatter.hero_image.childImageSharp.fluid}
            alt={data.frontmatter.title}
          />
        </figure>
        <div
          className={blogTemplateStyles.blog__body}
          dangerouslySetInnerHTML={{ __html: data.html }}
        ></div>
        <div className={blogTemplateStyles.blog__footer}>
          {(previousSlug !== '')
          ?<Link to={`blog/${previousSlug.fields.slug}`} className={blogTemplateStyles.footer__previous}>
            <FontAwesomeIcon icon={faAngleDoubleLeft} />
            <span>{previousSlug.frontmatter.title}</span>
          </Link>
          :<div></div>
          }
          <Link to={`blog/${nextSlug.fields.slug}`} className={blogTemplateStyles.footer__next}>
            <span>{nextSlug.frontmatter.title}</span>
            <FontAwesomeIcon icon={faAngleDoubleRight} />
          </Link>
        </div>
      </article>
    </Layout>
  )
}

//dynamic page query, must occur within each post context
//$slug is made available by context from createPages call in gatsby-node.js
export const getPostData = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        author
        date(formatString: "MMMM Do, YYYY")
        hero_image {
          childImageSharp {
            fluid(maxWidth: 1500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      html
      excerpt
    }
  }
`
