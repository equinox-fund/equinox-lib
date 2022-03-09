import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Heading from './Heading'

describe('components/typography/Heading', () => {
  it('should render', () => {
    const text = 'Hello'
    const { getByText } = render(<Heading size="large">{text}</Heading>)
    expect(getByText(text)).toBeInTheDocument()
  })

  it('should use custom class', () => {
    const className = 'hello-world-classname'
    const { container } = render(<Heading className={className}></Heading>)
    expect(container.firstChild).toHaveClass(className)
  })
})
