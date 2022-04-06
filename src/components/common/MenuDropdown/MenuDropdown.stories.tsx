import { Story, Meta } from '@storybook/react'
import EthereumIcon from '../../svg/Ethereum'
import SolanaIcon from '../../svg/Solana'
import BinanceSmartChainIcon from '../../svg/BinanceSmartChain'
import MenuDropdown, { MenuDropdownProps } from './MenuDropdown'
import { IoIosRocket } from 'react-icons/io'

export default {
  title: 'components/common/MenuDropdown',
  component: MenuDropdown
} as Meta

const Template: Story<MenuDropdownProps> = (args) => (
  <div className="flex px-12 py-24">
    <MenuDropdown {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  children: 'Default menu dropdown',
  items: [
    { name: 'polygon', label: 'Polygon', href: '#' },
    {
      name: 'ethereum',
      label: 'Ethereum',
      href: '#'
    },
    {
      name: 'solana',
      label: 'Solana',
      href: '#'
    },
    {
      name: 'bsc',
      label: 'Binance Smart Chain',
      href: '#'
    }
  ]
}

export const PreSelected = Template.bind({})
PreSelected.args = {
  children: 'Default menu dropdown',
  items: [
    { name: 'polygon', label: 'Polygon', href: '#' },
    {
      name: 'ethereum',
      label: 'Ethereum',
      href: '#'
    },
    {
      name: 'solana',
      label: 'Solana',
      href: '#'
    },
    {
      name: 'bsc',
      label: 'Binance Smart Chain',
      href: '#'
    }
  ],
  defaultItemName: 'ethereum'
}

export const WithButtonStyles = Template.bind({})
WithButtonStyles.args = {
  children: 'Menu dropdown with button styles',
  ButtonProps: {
    color: 'primary',
    variant: 'contained',
    icon: IoIosRocket,
    iconPosition: 'left'
  },
  items: [
    { name: 'polygon', label: 'Polygon', href: '#' },
    {
      name: 'ethereum',
      label: 'Ethereum',
      href: '#'
    },
    {
      name: 'solana',
      label: 'Solana',
      href: '#'
    },
    {
      name: 'bsc',
      label: 'Binance Smart Chain',
      href: '#'
    }
  ]
}

export const Icons = Template.bind({})
Icons.args = {
  children: 'Menu dropdown with icons',
  items: [
    {
      name: 'ethereum',
      label: 'Ethereum',
      href: '#',
      icon: <EthereumIcon className="w-4" />
    },
    {
      name: 'solana',
      label: 'Solana',
      href: '#',
      icon: <SolanaIcon className="w-4" />
    },
    {
      name: 'bsc',
      label: 'Binance Smart Chain',
      href: '#',
      icon: <BinanceSmartChainIcon className="w-4" />
    }
  ]
}

export const IconsLeft = Template.bind({})
IconsLeft.args = {
  children: 'Menu dropdown with icons left',
  iconsLeft: true,
  items: [
    {
      name: 'ethereum',
      label: 'Ethereum',
      href: '#',
      icon: <EthereumIcon className="w-4" />
    },
    {
      name: 'solana',
      label: 'Solana',
      href: '#',
      icon: <SolanaIcon className="w-4" />
    },
    {
      name: 'bsc',
      label: 'Binance Smart Chain',
      href: '#',
      icon: <BinanceSmartChainIcon className="w-4" />
    }
  ]
}

export const LoadingItem = Template.bind({})
LoadingItem.args = {
  children: 'Menu dropdown with loading state',
  items: [
    {
      name: 'ethereum',
      label: 'Ethereum',
      href: '#',
      icon: <EthereumIcon className="w-4" />,
      loading: true
    },
    {
      name: 'solana',
      label: 'Solana',
      href: '#',
      icon: <SolanaIcon className="w-4" />
    },
    {
      name: 'bsc',
      label: 'Binance Smart Chain',
      href: '#',
      icon: <BinanceSmartChainIcon className="w-4" />
    }
  ]
}

export const DisabledItem = Template.bind({})
DisabledItem.args = {
  children: 'Menu dropdown with disabled state',
  iconsLeft: true,
  items: [
    {
      name: 'ethereum',
      label: 'Ethereum',
      href: '#',
      icon: <EthereumIcon className="w-4" />
    },
    {
      name: 'solana',
      label: 'Solana',
      href: '#',
      icon: <SolanaIcon className="w-4" />
    },
    {
      name: 'bsc',
      label: 'Binance Smart Chain',
      href: '#',
      icon: <BinanceSmartChainIcon className="w-4" />,
      disabled: true
    }
  ]
}
