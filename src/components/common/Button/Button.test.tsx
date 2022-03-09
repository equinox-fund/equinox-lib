import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import { matchers } from '@emotion/jest'
import Button from './Button'
import { FaAccusoft } from 'react-icons/fa'

expect.extend(matchers)

describe('components/common/Button', () => {
  it('should render', () => {
    const text = 'Join pool'
    const { getByText } = render(<Button>{text}</Button>)
    const btn = getByText(text)
    expect(btn).toBeInTheDocument()
  })

  it('should use custom class', () => {
    const className = 'rounded-2'
    const { getByText } = render(<Button className={className}>Join</Button>)
    expect(getByText(/join/i)).toHaveClass(className)
  })

  it('should have icon (RIGHT) ', () => {
    const className = 'icon-right'
    const { container } = render(
      <Button icon={FaAccusoft} className={className}>
        Join
      </Button>
    )
    expect(container.firstChild).toHaveClass(className)
  })

  it('should have icon (LEFT)', () => {
    const className = 'icon-left'
    const { container } = render(
      <Button iconPosition="left" icon={FaAccusoft} className={className}>
        Join
      </Button>
    )
    expect(container.firstChild).toHaveClass(className)
  })

  it('calls onClick prop when clicked', () => {
    const onClick = jest.fn()
    const { getByText } = render(<Button onClick={onClick}>Join</Button>)
    const btn = getByText(/join/i)
    userEvent.click(btn)
    expect(onClick).toHaveBeenCalled()
  })

  it('renders spinner when loading', () => {
    const { getByTestId } = render(<Button loading={true}>Join</Button>)
    expect(getByTestId(/spinner/i)).toBeInTheDocument()
  })

  it('can be disabled', () => {
    const onClick = jest.fn()
    const { getByText } = render(
      <Button onClick={onClick} disabled={true}>
        Join
      </Button>
    )
    const btn = getByText(/join/i)
    userEvent.click(btn)
    expect(onClick).not.toHaveBeenCalled()
  })
})
