import { Story, Meta } from '@storybook/react'
import Heading, { HeadingProps } from './Heading'

export default {
  title: 'components/typography/Heading',
  component: Heading
} as Meta

const Template: Story<HeadingProps> = (args) => (
  <Heading {...args}>The first non‑fungible community driven launchpad</Heading>
)

export const Default = Template.bind({})
Default.args = {
  size: 'large',
  weight: 'semibold',
  color: 'primary',
  uppercase: false,
  link: false,
  active: false
}
