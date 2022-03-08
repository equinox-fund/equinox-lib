import Title from '../Title'
import Typography from '../Typography'
import { Meta, Story } from '@storybook/react'
import Card, { CardProps } from './Card'

export default {
  title: 'components/Card',
  component: Card
} as Meta

const Template: Story<CardProps> = (args) => (
  <div className="grid grid-cols-3 gap-x-8 px-12 py-12">
    <Card {...args}>
      <Title weight="semibold" className="mb-2">
        Equinox
      </Title>
      <Typography>
        The time for a new IDO launchpad and its character is upon us.
      </Typography>
    </Card>
    <Card {...args}>
      <Title size="small" weight="medium" className="mb-4">
        Token information
      </Title>
      <div className="flex justify-between mb-2">
        <Typography color="muted">Name:</Typography>
        <Typography>Chimeras</Typography>
      </div>
      <div className="flex justify-between">
        <Typography color="muted">Price:</Typography>
        <Typography>$0.0125</Typography>
      </div>
    </Card>
  </div>
)

export const Default = Template.bind({})
Default.args = {
  loading: false,
  padding: true,
  hoverAsLink: false
}
