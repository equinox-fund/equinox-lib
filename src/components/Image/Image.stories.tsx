import { Story, Meta } from '@storybook/react'
import Image, { ImageProps } from './Image'

export default {
  title: 'components/Image',
  component: Image
} as Meta

const Template: Story<ImageProps> = (args) => (
  <div className="p-12">
    <Image {...args} className="w-96 h-48 relative" />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  src: 'https://static.equinox.fund/projects/sin-city/sin-city.jpg'
}
