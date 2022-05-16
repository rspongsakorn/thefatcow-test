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
  align-items: baseline;
  justify-content: center;
  max-width: var(--size-max-width);
  margin: 0 auto;
  padding: var(--space-2xl) var(--size-gutter);
  height: 100%;
`

const ScTitle = styled.h1`
  letter-spacing: -0.012em;
  font-size: var(--text-title);
  font-weight: var(--extrabold);
  line-height: var(--solid);
  margin: 0 0 var(--space-xl);
`

const ScContent = styled.p`
  font-size: var(--text-lead);
  font-weight: var(--semibold);
  margin: 0;
`

function Header({ image, title, content }) {
  // console.log(image)
  return (
    <ScBackgroundImage fluid={image.fluid}>
      {/* <ScImage alt={title} image={image} /> */}
      <ScDetails>
        <ScTitle>{title}</ScTitle>
        {content && <ScContent>{content}</ScContent>}
      </ScDetails>
    </ScBackgroundImage>
  )
}

export default Header
