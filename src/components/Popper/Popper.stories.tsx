import { Meta, Story } from '@storybook/react'
import Button from '../Button'
import Popper, { PopperProps } from './Popper'

export default {
  title: 'components/common/Popper',
  component: Popper
} as Meta

const Template: Story<PopperProps> = (args) => (
  <Popper {...args}>
    <Button>Wanna see my tooltip?</Button>
  </Popper>
)

export const Default = Template.bind({})
Default.args = {
  tooltip: "Hey i'm the tooltip!"
}
