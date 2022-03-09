import { useState } from 'react'
import { Meta, Story } from '@storybook/react'
import SelectOptions, { SelectOptionsProps } from './SelectOptions'

export default {
  title: 'components/SelectOptions',
  component: SelectOptions
} as Meta

const Template: Story<SelectOptionsProps> = (args) => {
  const [value, setValue] = useState<string>('oranges')

  return (
    <SelectOptions {...args} value={value} onChange={(e) => setValue(e.currentTarget.value)} />
  )
}

export const Default = Template.bind({})
Default.args = {
  options: [
    { label: 'Apples', value: 'apples' },
    { label: 'Oranges', value: 'oranges' }
  ],
  label: 'What is your favourite fruit?',
  value: 'oranges',
  size: 'large',
  align: 'center',
  optionsAlign: 'row'
}
