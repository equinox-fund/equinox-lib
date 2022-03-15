import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import ExpandableContent from './ExpandableContent'

describe('components/common/ExpandableContent', () => {
  it('should render', () => {
    const labelText = 'Label text'
    const { getByText } = render(<ExpandableContent label={labelText}>Body text</ExpandableContent>)
    expect(getByText(labelText)).toBeInTheDocument()
  })

  it('should expand content when title row clicked', () => {
    const bodyText = 'Body text'
    const { getByText } = render(
      <ExpandableContent label="Label text">{bodyText}</ExpandableContent>
    )
    const btn = getByText(/label text/i)
    userEvent.click(btn)
    expect(getByText(bodyText)).toBeInTheDocument()
  })
})
