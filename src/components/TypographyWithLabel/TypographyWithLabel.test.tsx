import { matchers } from '@emotion/jest'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import TypographyWithLabel from './TypographyWithLabel'

expect.extend(matchers)

describe('Components/TypographyWithLabel', () => {
  it('should render', () => {
    const { getByText } = render(
      <TypographyWithLabel label="Best Launchpad">equinox</TypographyWithLabel>
    )

    const label = getByText(/Best Launchpad/i)
    const text = getByText(/equinox/i)
    expect(label).toBeInTheDocument()
    expect(text).toBeInTheDocument()
  })

  it('should use custom class', () => {
    const className = 'classname'

    const { getByTestId } = render(
      <TypographyWithLabel
        label="Best Launchpad"
        TypographyProps={{ className }}
      >
        equinox
      </TypographyWithLabel>
    )

    expect(getByTestId('text').firstChild).toHaveClass(className)
  })
})
