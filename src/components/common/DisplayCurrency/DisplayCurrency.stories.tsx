import { Story, Meta } from '@storybook/react'
import DisplayCurrency, { DisplayCurrencyProps } from './DisplayCurrency'

export default {
  title: 'components/common/DisplayCurrency',
  component: DisplayCurrency
} as Meta

const Template: Story<DisplayCurrencyProps> = (args) => (
  <DisplayCurrency {...args}></DisplayCurrency>
)

export const Default = Template.bind({})
Default.args = {
  amount: '500000'
}

export const WithComma = Template.bind({})
WithComma.args = {
  amount: '500000',
  addComma: true
}

export const WithDecimals = Template.bind({})
WithDecimals.args = {
  amount: '500000',
  decimals: 2
}

export const Multiple = Template.bind({})
Multiple.args = {
  amount: [5000, 4000]
}
