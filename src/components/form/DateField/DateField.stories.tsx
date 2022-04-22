import { Story, Meta } from '@storybook/react'
import DateField, { DateFieldProps } from './DateField'

export default {
  title: 'components/form/DateField',
  component: DateField
} as Meta

const Template: Story<DateFieldProps> = (args) => {
  return (
    <div className="p-12">
      <DateField {...args} />
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {
  name: 'birthdate',
  placeholder: 'Enter your date of birth',
  error: '',
  helper: '',
  label: ''
}
