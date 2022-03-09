import { Story, Meta } from '@storybook/react'
import { IoIosRocket } from 'react-icons/io'
import Button, { ButtonProps } from './Button'

export default {
  title: 'components/common/Button',
  component: Button
} as Meta

const Template: Story<ButtonProps> = (args) => (
  <div className="flex px-12 py-24">
    <div className="mr-4">
      <Button {...args}>Connect wallet</Button>
    </div>
  </div>
)

export const Default = Template.bind({})
Default.args = {}

export const WithIcon = Template.bind({})
WithIcon.args = {
  icon: IoIosRocket
}
