import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import MenuButton from './MenuButton'

describe('components/common/MenuButton', () => {
  it('should render', () => {
    const onClick = jest.fn()
    const { getByRole } = render(<MenuButton onClick={onClick} open={true} />)
    const btn = getByRole('button')
    expect(btn).toBeInTheDocument()
    expect(btn).toContainHTML('<span class="burger-top" />')
  })

  it('calls onClick prop when clicked', () => {
    let open = false
    const setOpen = (o) => (open = o)
    const { getByRole } = render(
      <MenuButton onClick={setOpen} open={open}>
        Join
      </MenuButton>
    )
    const btn = getByRole('button')
    userEvent.click(btn)
    expect(open).toBeTruthy()
  })
})
