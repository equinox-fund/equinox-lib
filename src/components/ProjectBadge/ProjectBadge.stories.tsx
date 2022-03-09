import { Story, Meta } from '@storybook/react'
import ProjectBadge from './ProjectBadge'

export default {
  title: 'components/ProjectBadge',
  component: ProjectBadge
} as Meta

const Template: Story = (args) => (
  <div className="p-12 flex">
    <ProjectBadge {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  children: 'Private',
  color: 'success',
  size: 'small'
}
