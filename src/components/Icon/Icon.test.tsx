import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Icon from './Icon'
import { FaAccusoft } from 'react-icons/fa'

describe('Components/Icon', () => {
  it('should render', () => {
    const { container } = render(<Icon svg={FaAccusoft}></Icon>)
    expect(container).not.toBe(null)
  })

  it('should take className', () => {
    const { container } = render(
      <Icon svg={FaAccusoft} className="hello"></Icon>
    )
    expect(container.firstChild).toHaveClass('hello')
  })
})
