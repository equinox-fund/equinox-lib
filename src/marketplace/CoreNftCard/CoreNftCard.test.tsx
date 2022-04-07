import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import CoreNftCard from './CoreNftCard'

describe('marketplace/CoreNftCard', () => {
  it('should render', () => {
    const text = 'Hello'
    const { getAllByText } = render(<CoreNftCard name={text} image="" price={1} usdPrice={100} />)
    expect(getAllByText(text)[0]).toBeInTheDocument()
  })

  it('should show skeleton when loading', () => {
    const { getAllByTestId } = render(
      <CoreNftCard name="Hello" image="" price={1} usdPrice={100} loading />
    )
    const skeleton = getAllByTestId(/skeleton/)[0]
    expect(skeleton).toBeInTheDocument()
  })
})
