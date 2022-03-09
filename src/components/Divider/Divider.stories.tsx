import { Story, Meta } from '@storybook/react'
import Divider from './Divider'

export default {
  title: 'components/Divider',
  component: Divider
} as Meta

const Template: Story = (args) => (
  <div className="m-12 h-12 flex max-w-xl">
    <Divider {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  horizontal: true
}
