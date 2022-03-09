import { Story, Meta } from '@storybook/react'
import { Button } from '..'

import Tooltip, { TooltipProps } from './Tooltip'

export default {
  title: 'components/common/Tooltip',
  component: Tooltip
} as Meta

const Template: Story<TooltipProps> = (args) => (
  <div className="flex px-12 py-24">
    <Tooltip {...args}>
      <Button variant="text" color="secondary">
        Hover me
      </Button>
    </Tooltip>
  </div>
)

export const Default = Template.bind({})
Default.args = {
  label: 'You just hover!'
}
