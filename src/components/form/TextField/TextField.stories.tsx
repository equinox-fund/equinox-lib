import { Meta, Story } from '@storybook/react'
import TextField, { TextFieldProps } from './TextField'

export default {
  title: 'components/form/Textfield',
  component: TextField
} as Meta

const Template: Story<TextFieldProps> = (args) => (
  <div className="p-12 max-w-sm">
    <TextField {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  placeholder: 'First name...',
  type: 'text',
  size: 'medium',
  error: '',
  helper: '',
  label: ''
}
