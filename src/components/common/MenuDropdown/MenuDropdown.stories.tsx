import { Story, Meta } from '@storybook/react'
import EthereumIcon from '../../svg/Ethereum'
import SolanaIcon from '../../svg/Solana'
import BinanceSmartChainIcon from '../../svg/BinanceSmartChain'
import UserIcon from '../../svg/User'
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
  className: 'w-72',
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
  children: 'Preselected menu dropdown',
  className: 'w-72',
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
  children: 'With button styles',
  className: 'w-72',
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
  children: 'With icons',
  className: 'w-72',
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
  children: 'With icons left',
  className: 'w-72',
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
  children: 'With loading state',
  className: 'w-72',
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
  children: 'With disabled state',
  className: 'w-72',
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


export const CustomButton = Template.bind({})
CustomButton.args = {
  children: (
    <div className="border-2 border-primary rounded-full">
      <UserIcon className="w-12" />
    </div>
  ),
  dropdownAlign: 'left',
  items: [
    {
      name: 'dashboard',
      label: 'Dashboard',
      href: '#',
    },
    {
      name: 'xp-history',
      label: 'XP History',
      href: '#'
    },
    {
      name: 'profile',
      label: 'My Profile',
      href: '#',
      disabled: true
    }
  ]
}

export const ItemGroups = Template.bind({})
ItemGroups.args = {
  children: (
    <div className="border-2 border-primary hover:border-primary-light transition-colors duration-base rounded-full">
      <UserIcon className="w-12" />
    </div>
  ),
  dropdownAlign: 'left',
  items: [
    {
      name: 'dashboard',
      label: 'Dashboard',
      href: '#'
    },
    {
      name: 'xp-history',
      label: 'XP History',
      href: '#'
    },
    {
      name: 'profile',
      label: 'My Profile',
      href: '#'
    },
    {
      name: 'logout',
      label: 'Logout',
      href: '#',
      divider: true
    }
  ]
}

export const CustomOption = Template.bind({})
CustomOption.args = {
  children: 'With custom option',
  items: [
    {
      name: 'dashboard',
      children: (
        <div className="flex p-4">
          <div className="w-6 h-6 bg-primary-light mr-2 cursor-pointer" />
          <div className="w-6 h-6 bg-primary mr-2 cursor-pointer" />
          <div className="w-6 h-6 bg-primary-dark mr-2 cursor-pointer" />
        </div>
      )
    },
    {
      name: 'logout',
      label: 'Logout',
      href: '#',
      divider: true
    }
  ]
}
