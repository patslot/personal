import React from 'react'
import Img from 'gatsby-image'


export default ({ data }) => (
  <div className="w-full h-screen bg-black ">
    <Img
      className="w-full"
      alt={data.name}
      fluid={data.heroImage.fluid}
    />
  
  </div>
)
