import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { matchers } from '@emotion/jest'
import tw from 'twin.macro'
import Typography from './Typography'

expect.extend(matchers)

describe('components/typography/Typography', () => {
  it('should render default medium size', () => {
    const text = 'Hello'
    const styles = tw`text-body-md`
    const { getByText } = render(<Typography>{text}</Typography>)

    const el = getByText(text)
    expect(el).toBeInTheDocument()
    expect(el).toHaveStyleRule('font-size', styles.fontSize)
  })

  it('should use custom class', () => {
    const className = 'classname'

    const { container } = render(
      <Typography className={className}></Typography>
    )

    expect(container.firstChild).toHaveClass(className)
  })
})
