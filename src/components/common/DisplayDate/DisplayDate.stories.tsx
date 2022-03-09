import { Story, Meta } from '@storybook/react'
import DisplayDate, { DisplayDateProps } from './DisplayDate'

export default {
  title: 'components/common/DisplayDate',
  component: DisplayDate
} as Meta

const Template: Story<DisplayDateProps> = (args) => (
  <div className="flex p-12">
    <DisplayDate {...args} />
  </div>
)

export const FormatDate = Template.bind({})
FormatDate.args = {
  date: '2022-05-19T01:00:00.000+00:00',
  format: 'date'
}

export const FormatTimeTo = Template.bind({})
FormatTimeTo.args = {
  date: '2022-05-19T01:00:00.000+00:00',
  format: 'timeTo'
}

export const FormatDateTime = Template.bind({})
FormatDateTime.args = {
  date: '2022-05-19T01:00:00.000+00:00',
  format: 'dateTime'
}

export const FormatTime = Template.bind({})
FormatTime.args = {
  date: '2022-05-19T01:00:00.000+00:00',
  format: 'time'
}
