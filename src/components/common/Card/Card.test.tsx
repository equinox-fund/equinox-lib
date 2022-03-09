import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Card from './Card'

describe('components/common/Card', () => {
  it('should render', () => {
    const text = 'Hello'
    const { getByText } = render(<Card>{text}</Card>)
    expect(getByText(text)).toBeInTheDocument()
  })

  it('should use custom class', () => {
    const className = 'classname'
    const { container } = render(<Card className={className}></Card>)
    expect(container.firstChild).toHaveClass(className)
  })

  it('should display loading state', () => {
    const { queryByTestId } = render(<Card loading={true}></Card>)
    expect(queryByTestId('loading-view')).toBeInTheDocument()
  })
})
