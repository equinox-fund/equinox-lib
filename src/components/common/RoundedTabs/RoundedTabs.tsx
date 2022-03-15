import classNames from 'classnames'
import React from 'react'
import Typography from '../Typography'
import styles from './styles'

export interface RoundedTabsProps {
  tabs: Array<{
    value: any
    label: string
  }>
  onClickTab(tabValue: any): void
  activeTab: any
}

const RoundedTabs: React.FC<RoundedTabsProps> = ({
  tabs,
  onClickTab,
  activeTab
}) => {
  const elements = tabs.map(({ label, value }) => {
    return (
      <button
        key={value}
        type="button"
        onClick={() => onClickTab(value)}
        className={classNames('tab-btn', {
          ['active']: activeTab == value
        })}
      >
        <Typography size="medium">{label}</Typography>
      </button>
    )
  })

  return (
    <div css={styles}>
      <div className="tabs">{elements}</div>
    </div>
  )
}

export default RoundedTabs
