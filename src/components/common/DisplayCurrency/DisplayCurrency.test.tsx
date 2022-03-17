import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import DisplayCurrency from './DisplayCurrency'

describe('Components/Common/DisplayCurrency', () => {
  it('should display TBD', () => {
    const { getByText } = render(
      <DisplayCurrency amount={''}></DisplayCurrency>
    )

    const content = getByText(/TBD/i)
    expect(content).toBeInTheDocument()
  })

  it('should display formatted number with currency', () => {
    const { getByText } = render(
      <DisplayCurrency amount={5000}></DisplayCurrency>
    )

    const content = getByText('$5,000')
    expect(content).toBeInTheDocument()
  })

  it('should display formatted numbers with currency', () => {
    const { getByText } = render(
      <DisplayCurrency amount={[5000, 4000]}></DisplayCurrency>
    )

    expect(getByText(/\$5,000/i)).toBeInTheDocument()
    expect(getByText(/\$4,000/i)).toBeInTheDocument()
  })
})
