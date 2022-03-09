import { Meta, Story } from '@storybook/react'
import Select, { SelectProps } from './Select'

export default {
  title: 'components/Select',
  component: Select
} as Meta

const options = [
  { label: 'option1', value: 'option1' },
  { label: 'option2', value: 'option2' }
]

const Template: Story<SelectProps> = (args) => (
  <div className="p-12 max-w-sm">
    <Select {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  options,
  placeholder: 'Select an option...',
  label: '',
  error: '',
  helper: ''
}
