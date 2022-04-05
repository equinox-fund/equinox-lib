import classNames from 'classnames'
import React, { useEffect, useRef, useState } from 'react'
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
  const tabsEl = useRef(null)
  const _scrolled = useRef(false)
  const [scrolled, setScrolled] = useState(false)
  const _showOverflowGradient = useRef(false)
  const [showOverflowGradient, setShowOverflowGradient] = useState(false)

  useEffect(() => {
    handleResize()
  }, [])

  const handleResize = () => {
    if (tabsEl.current.scrollWidth > tabsEl.current.clientWidth) {
      if (!_showOverflowGradient.current) {
        setShowOverflowGradient(true)
        _showOverflowGradient.current = true
      }
    } else if (_showOverflowGradient.current) {
      setShowOverflowGradient(false)
      _showOverflowGradient.current = false
    }
  }

  const handleScroll = () => {
    if (tabsEl.current.scrollLeft > 0 && !_scrolled.current) {
      setScrolled(true)
      _scrolled.current = true
    } else if (tabsEl.current.scrollLeft === 0 && _scrolled.current) {
      setScrolled(false)
      _scrolled.current = false
    }
  }

  useEffect(() => {
    tabsEl.current.addEventListener('scroll', handleScroll)
    window?.addEventListener('resize', handleResize)

    return () => {
      tabsEl.current.removeEventListener('scroll', handleScroll)
      window?.removeEventListener('resize', handleResize)
    }
  }, [])

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
    <div css={styles({ scrolled, showOverflowGradient })}>
      <div className="tabs-container" ref={tabsEl}>
        <div className="tabs">{elements}</div>
      </div>
    </div>
  )
}

export default RoundedTabs
