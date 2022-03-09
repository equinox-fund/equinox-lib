import { Story, Meta } from '@storybook/react'
import { GoRocket, GoCheck } from 'react-icons/go'
import IconButton, { IconButtonProps } from './IconButton'

export default {
  title: 'components/common/IconButton',
  component: IconButton
} as Meta

const Template: Story<IconButtonProps> = (args) => (
  <div className="flex py-12">
    <IconButton
      {...args}
      icon={<GoRocket className="h-auto" />}
      className="mx-2"
      tooltip={true}
      TooltipProps={{ placement: 'bottom', label: 'Launch project' }}
    />
    <IconButton {...args} icon={<GoCheck className="h-auto" />} className="mx-2" />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  size: 'medium',
  color: 'secondary',
  variant: 'contained',
  loading: false,
  disabled: false
}
