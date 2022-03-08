import { Story, Meta } from '@storybook/react'
import Checkbox, { CheckboxProps } from './Checkbox'

export default {
  title: 'components/Checkbox',
  component: Checkbox
} as Meta

const Template: Story<CheckboxProps> = (args) => (
  <div className="p-12">
    <Checkbox {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  label: 'Check me if you can!',
  checked: false,
  size: 'large',
  align: 'center'
}
