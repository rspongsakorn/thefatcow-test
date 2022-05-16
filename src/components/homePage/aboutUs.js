import React from 'react'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

const ScBackgroundImage = styled(BackgroundImage)`
  overflow: auto;
  background-position: bottom center;
  height: 700px;
`

const ScDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
  max-width: var(--size-max-width);
  margin: 0 auto;
  padding: var(--space-2xl) var(--size-gutter);
  height: 100%;
`

const ScText = styled.div`
  width: 55%;
  letter-spacing: -0.012em;
  font-size: 24px;
  font-weight: var(--extrabold);
  line-height: var(--solid);
`

function AboutUs({ image, content }) {
  // console.log(content)
  return (
    <ScBackgroundImage fluid={image.fluid}>
      <ScDetails>
        <ScText
          dangerouslySetInnerHTML={{
            __html: content.childMarkdownRemark.html,
          }}
        />
      </ScDetails>
    </ScBackgroundImage>
  )
}

export default AboutUs
