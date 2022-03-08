import { Story, Meta } from '@storybook/react'
import Title, { TitleProps } from './Title'

export default {
  title: 'components/Title',
  component: Title
} as Meta

const Template: Story<TitleProps> = (args) => (
  <Title {...args}>The first non‑fungible community driven launchpad</Title>
)

export const Default = Template.bind({})
Default.args = {
  size: 'medium',
  weight: 'semibold',
  color: 'secondary',
  uppercase: false,
  link: false,
  active: false
}
