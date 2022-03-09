import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import SelectOptions from './SelectOptions'

const options = [
  { label: 'yes', value: 'true' },
  { label: 'no', value: 'false' }
]

describe('Components/SelectOptions', () => {
  it('should render', () => {
    const label = 'Select between those options?'
    const { getByText } = render(
      <SelectOptions options={options} label={label} />
    )
    expect(getByText(label)).toBeInTheDocument()
  })

  it('should render error', () => {
    const label = 'Select between those options?'
    const { getByText } = render(
      <SelectOptions options={options} label={label} error="An error occured" />
    )

    expect(getByText(/An error occured/i)).toBeInTheDocument()
  })
})
