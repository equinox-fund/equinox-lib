import { useState } from 'react'
import { Story, Meta } from '@storybook/react'
import MenuButton, { MenuButtonProps } from './MenuButton'

export default {
  title: 'components/MenuButton',
  component: MenuButton
} as Meta

const Template: Story<MenuButtonProps> = () => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <div className="p-12">
      <MenuButton open={open} onClick={(o) => setOpen(o)} />
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {}
