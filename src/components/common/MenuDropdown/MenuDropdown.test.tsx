import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import MenuDropdown from './MenuDropdown'

const items = [
  { label: 'Polygon', href: '#' },
  { label: 'Ethereum', href: '#' }
]

describe('components/common/MenuDropdown', () => {
  it('should not render items unless opened', () => {
    const { queryByText } = render(
      <MenuDropdown items={items}>Label</MenuDropdown>
    )
    const item = queryByText(/ethereum/)
    expect(item).not.toBeInTheDocument()
  })

  it('should render when opened', () => {
    const { getByText } = render(
      <MenuDropdown items={items}>Label</MenuDropdown>
    )
    const btn = getByText(/label/i)
    userEvent.click(btn)
    const item = getByText(/ethereum/i)
    expect(item).toBeInTheDocument()
  })

  it('should close when clicked outside dropdown', async () => {
    const { getByText, getByTestId } = render(
      <MenuDropdown items={items}>Label</MenuDropdown>
    )
    const btn = getByText(/label/i)
    userEvent.click(btn)
    const item = getByText(/ethereum/i)
    expect(item).toBeInTheDocument()
    fireEvent.mouseDown(document.body)
    expect(getByTestId(/dropdown-list/i)).toHaveStyle({ display: 'none' })
  })
})
