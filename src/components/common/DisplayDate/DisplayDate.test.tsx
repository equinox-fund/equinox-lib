import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import DisplayDate from './DisplayDate'

describe('components/common/DisplayDate', () => {
  it('should display TBD', () => {
    const { getByText } = render(<DisplayDate date=""></DisplayDate>)

    const content = getByText(/TBD/i)
    expect(content).toBeInTheDocument()
  })

  it('should render date', () => {
    const { getByText } = render(
      <DisplayDate date="2021-04-19T01:00:00.000+00:00" />
    )
    const content = getByText(/2021/i)
    expect(content).toBeInTheDocument()
  })

  it('should show difference between two dates', () => {
    const { getByText } = render(
      <DisplayDate date="2021-04-19T01:00:00.000+00:00" format="timeTo" />
    )
    const content = getByText(/ago/i)
    expect(content).toBeInTheDocument()
  })

  it('should show date including time', () => {
    const { getByText } = render(
      <DisplayDate date="2021-08-19T01:00:00.000+00:00" format="dateTime" />
    )
    const content = getByText(/aug/i)
    expect(content).toBeInTheDocument()
  })

  it('should render utc date', () => {
    const { getByText } = render(
      <DisplayDate date="2021-08-19T13:00:00.000+00:00" format="dateTime" utc />
    )
    const content = getByText(/utc/i)
    const time = getByText(/13:00/i)
    expect(content).toBeInTheDocument()
    expect(time).toBeInTheDocument()
  })
})
