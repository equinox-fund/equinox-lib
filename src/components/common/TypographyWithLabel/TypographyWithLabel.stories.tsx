import { Story, Meta } from '@storybook/react'
import Typography from '../Typography'
import TypographyWithLabel, {
  TypographyWithLabelProps
} from './TypographyWithLabel'

export default {
  title: 'components/typography/TypographyWithLabel',
  component: TypographyWithLabel
} as Meta

const Template: Story<TypographyWithLabelProps> = (args) => (
  <div className="p-12 max-w-lg">
    <TypographyWithLabel {...args}>
      <Typography>Value text</Typography>
    </TypographyWithLabel>
  </div>
)

export const Default = Template.bind({})
Default.args = {
  label: 'Label text',
  direction: 'row',
  reversed: false
}
