import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import TextField from './TextField'

describe('Components/Textfield', () => {
  it('should render', () => {
    const { getByPlaceholderText } = render(
      <TextField placeholder="enter email..." />
    )
    expect(getByPlaceholderText(/enter email/i)).toBeInTheDocument()
  })

  it('should display error and hide error', () => {
    const { getByText, queryByText } = render(
      <TextField
        placeholder="enter email..."
        helper="helper"
        error="An error occured"
      />
    )

    expect(getByText(/An error occured/i)).toBeInTheDocument()
    expect(queryByText(/helper/i)).toBe(null)
  })

  it('should display helper', () => {
    const { getByText } = render(
      <TextField placeholder="enter email..." helper="helper" />
    )

    expect(getByText(/helper/i)).toBeInTheDocument()
  })
})
