import { css } from 'styled-components'
import { MEDIA } from './stylesPageLayout'

/**
 * minimum width for navigation bar
 */
export const NAVIGATION_BAR_HEIGHT = '70px'

/**
 * spacing
 */
const BASE_SPACING = 9
export const SPACING = {
  SM: `${BASE_SPACING / 2}px`,
  BASE: `${BASE_SPACING}px`,
  MD: `${BASE_SPACING * 2}px`,
  LG: `${BASE_SPACING * 3}px`,
  XL: `${BASE_SPACING * 4}px`,
  XXL: `${BASE_SPACING * 5}px`,
}

/**
 * make flex-item aligned center
 */
const flexCenterDefaultProperties = `
  align-items: center;
  justify-content: center;
`
export const flexCenter = css`
  display: flex;
  ${flexCenterDefaultProperties}
`
export const inlineFlexCenter = css`
  display: inline-flex;
  ${flexCenterDefaultProperties}
`

/** box-shadow */
export const withBoxShadow = css`
  box-shadow: 0px 10px 35px -5px rgba(0, 0, 0, 0.5);
`

/** text truncate */
export const withEllipsis = (numberOfLine) => css`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: ${numberOfLine};
  -webkit-box-orient: vertical;
`
/** gradient */
export const linearGradient = (degree, primary, secondary, primaryArea = '') =>
  `linear-gradient(${degree}deg, ${primary} ${primaryArea}, ${secondary})`

/** fullscreen */
export const withFullScreenMobile = css`
  ${MEDIA.MOBILE`
    width: 100vw;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
  `}
`

/** reset default button style */
export const resetButtonStyle = css`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  margin: 0;
  padding: 0;
  appearance: none;
`
