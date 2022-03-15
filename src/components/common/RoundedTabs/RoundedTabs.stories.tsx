import { Story, Meta } from '@storybook/react'
import RoundedTabs, { RoundedTabsProps } from './RoundedTabs'
import { useState } from 'react'

export default {
  title: 'components/common/RoundedTabs',
  component: RoundedTabs
} as Meta

const Template: Story<RoundedTabsProps> = (args) => {
  const [activeTab, setActiveTab] = useState('all')

  return (
    <div className="p-12 flex text-secondary">
      <RoundedTabs
        {...args}
        onClickTab={(val) => setActiveTab(val)}
        activeTab={activeTab}
      />
    </div>
  )
}


export const Default = Template.bind({})
Default.args = {
  tabs: [
    { value: 'all', label: 'All items' },
    { value: 'guild', label: 'Guild' },
    { value: 'launchpad', label: 'Launchpad' }
  ]
}
