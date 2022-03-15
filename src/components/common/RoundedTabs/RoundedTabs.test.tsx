import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import RoundedTabs from './RoundedTabs'

const tabs = [
    { value: 'all', label: 'All items' },
    { value: 'guild', label: 'Guild' },
    { value: 'launchpad', label: 'Launchpad' }
  ]

describe('components/common/RoundedTabs', () => {
  it('should render', () => {
    const onClick = jest.fn()
    const { getByText } = render(
      <RoundedTabs tabs={tabs} activeTab={'all'} onClickTab={onClick} />
    )
    expect(getByText(/all items/i)).toBeInTheDocument()
  })

  it('should activate tab when tab clicked', () => {
    const onClick = jest.fn()
    const { getByText } = render(
      <RoundedTabs tabs={tabs} activeTab={'all'} onClickTab={onClick} />
    )
    const btn = getByText(/guild/i).closest('button')
    userEvent.click(btn)
    expect(onClick).toHaveBeenCalled()
  })
})
