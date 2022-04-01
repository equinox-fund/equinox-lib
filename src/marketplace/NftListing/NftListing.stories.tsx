import { Meta, Story } from '@storybook/react'
import NftListing, { NftListingProps } from './NftListing'

export default {
  title: 'marketplace/NftListing',
  component: NftListing
} as Meta

const Template: Story<NftListingProps> = (args) => (
  <div className="container py-12">
    <NftListing {...args} />
  </div>
)

const defaultProps = {
  nft: {
    name: 'Vernal',
    createdAt: 'Thu Mar 31 2022 02:28:21 GMT+0000',
    image: '/nft/vernal.jpg',
    description:
      'With unmatched skill, amazing powers, an unwavering dedication to a cause, and stalwart in their beliefs, they will attune to their mates to guide them in their quest.',
    marketplaceSupply: 13,
    totalSupply: 100,
    offers: [
      {
        uid: 'xxx',
        price: 3,
        amount: 13,
        owner: '0xecda894f083fb3qt443t0089dcc'
      }
    ]
  },
  ethPrice: 3000,
  checkNftFlags: () => ({ canBuy: true }),
  loading: false,
  onNavClick: () => false,
  activeNavItem: 'info',
  royaltyFeeDetails: {
    fee: 0.1
  },
  user: {
    address: '0xecda894f083fb3qt443t0089dcc'
  }
}

export const Default = Template.bind({})
Default.args = {
  ...defaultProps
}

export const ConnectWallet = Template.bind({})
ConnectWallet.args = {
  ...defaultProps,
  user: {}
}

export const History = Template.bind({})
History.args = {
  ...defaultProps,
  nft: {
    ...defaultProps.nft,
    history: [
      {
        operator: '0xabd894f083fb3qt443t0089afce',
        action: 'Listed',
        createdAt: 'Mar 20 2022 02:28:21 GMT+0000',
        transactionHash:
          '0xdc7cb732ac4a97b75eb058b4486e3952658bec02e1ffb2ba93f18c228adc8e8e'
      },
      {
        operator: '0xdefaaa894f083fb3qt443t0089dcc',
        action: 'Listed',
        createdAt: 'Mar 22 2022 02:28:21 GMT+0000',
        transactionHash:
          '0xdc7cb732ac4a97b75eb058b4486e3952658bec02e1ffb2ba93f18c228adc8e8e'
      }
    ]
  },
  activeNavItem: 'history'
}

export const NoHistory = Template.bind({})
NoHistory.args = {
  ...defaultProps,
  activeNavItem: 'history'
}



export const Offers = Template.bind({})
Offers.args = {
  ...defaultProps,
  nft: {
    ...defaultProps.nft,
    offers: [
      {
        uid: 'xxx',
        price: 3,
        amount: 1,
        owner: '0xdc7cb732ac4a97b75eb058b4486e3952658bec02e1ffb2ba93f18c228adc8e8e'
      },
      {
        uid: 'xxx',
        price: 2.8,
        amount: 1,
        owner: '0xdc7cb732ac4a97b75eb058b4486e3952658bec02e1ffb2ba93f18c228adc8e8e'
      }
    ]
  },
  activeNavItem: 'offers'
}

export const NoOffers = Template.bind({})
NoOffers.args = {
  ...defaultProps,
  nft: {
    ...defaultProps.nft,
    offers: []
  },
  activeNavItem: 'offers'
}

