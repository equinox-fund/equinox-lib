import { Story, Meta } from '@storybook/react'
import MultiSelect, { MultiSelectProps } from './MultiSelect'

export default {
  title: 'components/form/MultiSelect',
  component: MultiSelect
} as Meta

const Template: Story<MultiSelectProps> = (args) => {
  return (
    <div className="p-12 text-secondary">
      <MultiSelect {...args} />
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {
  name: 'internetType',
  placeholder: 'Select your connection type',
  options: [
    { value: 'home', label: 'Home internet / WiFi' },
    { value: 'mobile', label: 'Mobile data' },
    { value: 'cafe', label: 'Internet cafe' }
  ],
  error: '',
  helper: '',
  label: ''
}
