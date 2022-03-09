import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
// import '@test/test-utils'
import Checkbox from './Checkbox'

describe('components/form/Checkbox', () => {
  it('should render', () => {
    const label = 'accept terms?'
    const { getByLabelText } = render(<Checkbox label={label} />)
    expect(getByLabelText(label)).toBeInTheDocument()
  })

  it('should render error', () => {
    const label = 'accept terms?'
    const { getByText } = render(
      <Checkbox label={label} error="An error occured" />
    )

    expect(getByText(/An error occured/i)).toBeInTheDocument()
  })
})
