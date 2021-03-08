import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'


export default ({ article }) => (
  <div className="bg-white rounded overflow-hidden">
    <Img alt="" fluid={article.heroImage.fluid} />
    <div className="p-4">
    <h3 className="text-lg font-bold">
      <Link to={`/blog/${article.slug}`}>{article.title}</Link>
    </h3>
    <small>{article.publishDate}</small>
    <p
      dangerouslySetInnerHTML={{
        __html: article.description.childMarkdownRemark.html,
      }}
    />
    </div>
  </div>
)
