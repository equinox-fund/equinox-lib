import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import NftListing from './NftListing'

describe('marketplace/NftListing', () => {
  it('should render', () => {
    const text = 'Hello'
    const { getAllByText } = render(
      <NftListing
        nft={{ name: text }}
        image=""
        price={1}
        usdPrice={100}
        checkNftFlags={() => false}
      />
    )
    expect(getAllByText(text)[0]).toBeInTheDocument()
  })

  it('should show skeleton when loading', () => {
    const { getAllByTestId } = render(
      <NftListing nft={{ name: 'Hello' }} image="" price={1} usdPrice={100} loading />
    )
    const skeleton = getAllByTestId(/skeleton/)[0]
    expect(skeleton).toBeInTheDocument()
  })
})
