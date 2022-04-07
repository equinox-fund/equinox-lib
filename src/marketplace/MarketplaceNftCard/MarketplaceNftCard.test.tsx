import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import MarketplaceNftCard from './MarketplaceNftCard'

describe('marketplace/MarketplaceNftCard', () => {
  it('should render', () => {
    const text = 'Hello'
    const { getByText } = render(
      <MarketplaceNftCard name={text} available={5} image="" price={650} />
    )
    expect(getByText(text)).toBeInTheDocument()
  })

  it('should show skeleton when loading', () => {
    const { getAllByTestId } = render(
      <MarketplaceNftCard
        name="Hello"
        available={5}
        image=""
        price={650}
        loading
      />
    )
    const skeleton = getAllByTestId(/skeleton/)[0]
    expect(skeleton).toBeInTheDocument()
  })
})
