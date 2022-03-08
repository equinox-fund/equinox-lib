import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Title from './Title'

describe('Components/Common/Title', () => {
  it('should render', () => {
    const text = 'Hello'
    const { getByText } = render(<Title size="large">{text}</Title>)
    expect(getByText(text)).toBeInTheDocument()
  })

  it('should use custom class', () => {
    const className = 'hello-world-classname'
    const { container } = render(<Title className={className}></Title>)
    expect(container.firstChild).toHaveClass(className)
  })
})
