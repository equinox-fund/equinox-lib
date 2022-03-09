import { Meta, Story } from '@storybook/react'
import Spinner, { SpinnerProps } from './Spinner'

export default {
  title: 'components/common/Spinner',
  component: Spinner
} as Meta

const Template: Story<SpinnerProps> = (args) => <Spinner {...args} />

export const Default = Template.bind({})
Default.args = {}
