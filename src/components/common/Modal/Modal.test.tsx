import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import Modal from './Modal'

let setShow: (open: boolean) => void = jest.fn()

describe('Components/Common/Modal', () => {
  it('should not render in DOM unless opened', () => {
    const { queryByRole } = render(
      <Modal title="modal" show={false} setShow={setShow}>
        Sign in
      </Modal>
    )
    const modal = queryByRole(/dialog/)
    expect(modal).not.toBeInTheDocument()
  })

  it('should render when opened', () => {
    const { queryByRole } = render(
      <Modal title="modal" show setShow={setShow}>
        Sign in
      </Modal>
    )
    const modal = queryByRole(/dialog/)
    expect(modal).toBeInTheDocument()
  })

  it('should close when backdrop is clicked', async () => {
    let show = true
    setShow = (open) => (show = open)
    const { getByRole } = render(
      <Modal title="modal" show={show} setShow={setShow}>
        Sign in
      </Modal>
    )
    const modal = getByRole(/dialog/)
    const backdrop = modal.firstChild as Element
    expect(backdrop).toHaveStyle('position: fixed;')
    userEvent.click(backdrop)
    expect(show).toBeFalsy()
  })

  it('should not close when backdrop is clicked if backdropClose set to false', async () => {
    let show = true
    setShow = (open) => (show = open)
    const { getByRole } = render(
      <Modal title="modal" show={show} setShow={setShow} backdropClose={false}>
        Sign in
      </Modal>
    )
    const modal = getByRole(/dialog/)
    const backdrop = modal.firstChild as Element
    expect(backdrop).toHaveStyle('position: fixed;')
    userEvent.click(backdrop)
    expect(show).toBeTruthy()
  })

  it('should render without padding', () => {
    const text = 'Sign in'
    const { getByText } = render(
      <Modal title="modal" show setShow={setShow} padding={false}>
        Sign in
      </Modal>
    )
    const modalInner = getByText(text)
    expect(modalInner).not.toHaveStyle('padding: 1.5rem;')
  })

  it('should close when close button is clicked', () => {
    let show = true
    setShow = (open) => (show = open)
    const { getByTestId } = render(
      <Modal title="modal" show={show} setShow={setShow}>
        Sign in
      </Modal>
    )
    expect(show).toBeTruthy()
    const closeBtn = getByTestId(/modalClose/i)
    userEvent.click(closeBtn)
    expect(show).toBeFalsy()
  })

  it('should not render title', () => {
    const { queryByTestId } = render(
      <Modal show={true} setShow={setShow}>
        Sign in
      </Modal>
    )

    const closeBtn = queryByTestId(/modalClose/i)
    expect(closeBtn).not.toBeInTheDocument()
  })
})
