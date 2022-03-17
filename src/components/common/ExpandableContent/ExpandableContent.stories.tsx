import { Story, Meta } from '@storybook/react'
import ExpandableContent, { ExpandableContentProps } from './ExpandableContent'
import { useState } from 'react'

export default {
  title: 'components/common/ExpandableContent',
  component: ExpandableContent
} as Meta

const Template: Story<ExpandableContentProps> = (args) => (
  <div className="p-12 flex text-secondary">
    <ExpandableContent {...args}>
      Meet Peter, Founder and CEO of the Grow Group. Before founding Grow in
      2021, he established himself as a thought leader in the crypto space with
      a large following under his pseudonym ‘Bankless.’ The forward-thinking
      vision he shared through editorial pieces soon caught the attention of
      various cutting-edge blockchain companies, with whom Peter ended up taking
      on different advisory roles as a natural progression.
    </ExpandableContent>
  </div>
)

export const Default = Template.bind({})
Default.args = {
  label: 'Tokenomics'
}
