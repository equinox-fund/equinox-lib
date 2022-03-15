import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ChainIcon from './ChainIcon'

describe('Components/Form/ChainIcon', () => {
  it('should render ETH', () => {
    const { queryByTestId } = render(<ChainIcon chainId={1} />)
    expect(queryByTestId('eth-svg')).toBeInTheDocument()
  })

  it('should render ETH', () => {
    const { queryByTestId } = render(<ChainIcon chainId={56} />)
    expect(queryByTestId('bnb-svg')).toBeInTheDocument()
  })

  it('should render unknow chain', () => {
    const { queryByTestId } = render(<ChainIcon chainId={100} />)
    expect(queryByTestId('unknown-chain-svg')).toBeInTheDocument()
  })
})
