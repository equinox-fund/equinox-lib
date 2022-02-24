import { Story, Meta } from '@storybook/react'
import { IoIosRocket } from 'react-icons/io'
import Icon, { IconProps } from './Icon'

export default {
  title: 'components/common/Icon',
  component: Icon
} as Meta

const Template: Story<IconProps> = (args) => (
  <div className="flex px-12 py-24">
    <div className="mr-8">
      <Icon {...args}>Join pool</Icon>
    </div>
  </div>
)

export const Default = Template.bind({})
Default.args = {
  svg: IoIosRocket,
  className: 'w-10 h-10'
}
