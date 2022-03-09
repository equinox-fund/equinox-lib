import { Story, Meta } from '@storybook/react'
import Typography, { TypographyProps } from './Typography'

export default {
  title: 'components/typography/Typography',
  component: Typography
} as Meta

const Template: Story<TypographyProps> = (args) => (
  <Typography {...args}>
    Tailwind CSS is the only framework that I've seen scale on large teams. It’s
    easy to customize, adapts to any design, and the build size is tiny.
  </Typography>
)

export const Default = Template.bind({})
Default.args = {}

export const AsLink = Template.bind({})
AsLink.args = {
  hoverAsLink: true
}
