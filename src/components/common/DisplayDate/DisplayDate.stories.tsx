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

export const Default = Template.bind({})
Default.args = {
  date: '2022-05-19T01:00:00.000+00:00',
  format: 'date'
}
