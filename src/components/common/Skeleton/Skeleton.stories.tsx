import { Story, Meta } from '@storybook/react'
import Skeleton from './Skeleton'

export default {
  title: 'components/common/Skeleton',
  component: Skeleton
} as Meta

const Template: Story = (args) => (
  <div className="m-12 h-12 flex max-w-xl">
    <Skeleton {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  className: 'w-32 h-4'
}
