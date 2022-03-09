import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Select from './Select'

describe('components/form/Select', () => {
  it('should render', () => {
    const { container } = render(
      <Select options={[]} placeholder="enter email..." />
    )
    expect(
      container.querySelector('option[value=""][disabled]')
    ).toBeInTheDocument()
  })

  it('should display error and hide error', () => {
    const { getByText, queryByText } = render(
      <Select
        options={[]}
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
      <Select options={[]} placeholder="enter email..." helper="helper" />
    )

    expect(getByText(/helper/i)).toBeInTheDocument()
  })
})
