import React, { useState } from 'react'
import styled from 'styled-components'
import { GatsbyImage } from 'gatsby-plugin-image'
import { MEDIA, COLORS } from '../utils/styles'

const ScWrapper = styled.div`
  max-width: var(--size-max-width);
  margin: 0 auto 50px;
  padding: var(--space-2xl) var(--size-gutter);
  color: black;
`

const ScTitle = styled.h2`
  letter-spacing: -0.012em;
  font-size: var(--text-title);
  font-weight: var(--extrabold);
  line-height: var(--solid);
  margin: 40px 0;
`

const ScCategoryFlex = styled.div`
  display: flex;
  margin-bottom: 30px;
`

const ScCategoryButton = styled.div`
  margin-right: 20px;
  width: 150px;
  border: 3px solid ${COLORS.ORANGE};
  border-radius: 20px;
  padding: 8px;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  user-select: none;
  ${(props) =>
    props.isActive &&
    `
      background-color: antiquewhite;
    `}
`

const ScMenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  ${MEDIA.TABLET`
  grid-template-columns: repeat(3, 1fr);
  `}

  ${MEDIA.MOBILE`
  grid-template-columns: repeat(1, 1fr);
  `}

  gap: 20px;
`

const ScMenuItem = styled.div`
  background-color: ${COLORS.ORANGE};
  border-radius: 5%;

  padding: 20px;
`

const ScGatsbyImage = styled(GatsbyImage)`
  height: 150px;
  width: auto;
`

const ScMenuTitle = styled.h3`
  font-weight: bold;
`

const ScMenuDescription = styled.div`
  font-size: var(--text-sm);
`

const ScMenuPrice = styled.div`
  font-weight: bold;
  font-size: var(--text-lg);
`
const CategoryButton = ({ name, isActive, setActiveCat }) => {
  return (
    <ScCategoryButton
      isActive={isActive}
      onClick={() => {
        setActiveCat(name)
      }}
    >
      {name}
    </ScCategoryButton>
  )
}

const Menu = ({ categories }) => {
  const [activeCat, setActiveCat] = useState(categories[0].name)

  const filtersCategories = categories.filter((category) => {
    return !!category.menu
  })
  const menus = filtersCategories.find(({ name }) => name === activeCat).menu

  return (
    <ScWrapper>
      <ScTitle>MENU</ScTitle>
      <ScCategoryFlex>
        {filtersCategories.map((category) => {
          return (
            <CategoryButton
              key={'cat_button_' + category.name}
              name={category.name}
              isActive={category.name === activeCat}
              setActiveCat={setActiveCat}
            />
          )
        })}
      </ScCategoryFlex>
      <ScMenuGrid>
        {menus.map((menu) => {
          return (
            <ScMenuItem key={menu.name}>
              <ScGatsbyImage
                alt="menu.name"
                image={menu.image.gatsbyImageData}
              />
              <ScMenuTitle>{menu.name}</ScMenuTitle>
              <ScMenuDescription>{menu.ingredient}</ScMenuDescription>

              <ScMenuPrice>{menu.price} THB</ScMenuPrice>
            </ScMenuItem>
          )
        })}
      </ScMenuGrid>
    </ScWrapper>
  )
}

export default Menu
