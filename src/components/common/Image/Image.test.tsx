import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { matchers } from '@emotion/jest'
import Image from './Image'

expect.extend(matchers)

const src = 'https://static.equinox.fund/projects/sin-city/sin-city.jpg'
const alt = 'alt'

describe('components/common/Image', () => {
  it('should render', () => {
    const { getByAltText } = render(<Image src={src} alt={alt} />)
    const img = getByAltText(alt)
    expect(img).toBeInTheDocument()
  })
})
