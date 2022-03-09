import { Story, Meta } from '@storybook/react'
import Algorand from './Algorand'
import ArrowRight from './ArrowRight'
import BinanceSmartChain from './BinanceSmartChain'
import Close from './Close'
import Ethereum from './Ethereum'
import Metamask from './Metamask'
import Minus from './Minus'
import Plus from './Plus'
import Polygon from './Polygon'
import Solana from './Solana'
import Tether from './Tether'
import WalletConnect from './WalletConnect'

export default {
  title: 'icons/All'
} as Meta

const Template: Story = (args) => (
  <div className="p-12 flex items-center">
    <Algorand className="w-6 mr-8" />
    <ArrowRight className="mr-8" />
    <BinanceSmartChain className="w-6 mr-8" />
    <Close className="w-6 mr-8" />
    <Ethereum className="w-6 mr-8" />
    <Metamask className="w-6 mr-8" />
    <Minus className="w-6 mr-8" />
    <Plus className="w-6 mr-8" />
    <Polygon className="w-6 mr-8" />
    <Solana className="w-6 mr-8" />
    <Tether className="w-6 mr-8" />
    <WalletConnect className="w-6 mr-8" />
  </div>
)

export const Default = Template.bind({})
Default.args = {}
