import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import { matchers } from '@emotion/jest'
import tw from 'twin.macro'
import { GoRocket } from 'react-icons/go'
import IconButton from './IconButton'

expect.extend(matchers)

describe('components/common/IconButton', () => {
  it('should render', () => {
    const { getByRole } = render(
      <IconButton icon={<GoRocket />} title="Rocket" />
    )
    expect(getByRole('button')).toBeInTheDocument()
  })

  it('should use color option', () => {
    const color = 'secondary'
    const styles = tw`text-secondary`
    const { getByRole } = render(
      <IconButton color={color} icon={<GoRocket />} title="Rocket" />
    )
    expect(getByRole('button')).toHaveStyleRule('color', styles.color)
  })

  it('should use variant option', () => {
    const variant = 'outlined'
    const styles = tw`border`
    const { getByRole } = render(
      <IconButton variant={variant} icon={<GoRocket />} title="Rocket" />
    )
    const btn = getByRole('button')
    expect(btn).toHaveStyleRule('border-width', styles.borderWidth)
  })

  it('calls onClick prop when clicked', () => {
    const onClick = jest.fn()
    const { getByRole } = render(
      <IconButton onClick={onClick} icon={<GoRocket />} title="Rocket" />
    )
    const btn = getByRole('button')
    userEvent.click(btn)
    expect(onClick).toHaveBeenCalled()
  })

  it('should render as anchor tag if href passed', () => {
    const href = '/'
    const title = 'Rocket'
    const { getByTitle } = render(
      <IconButton icon={<GoRocket />} title={title} href={href} />
    )
    expect(getByTitle(title)).toHaveAttribute('href', href)
  })

  it('should render a tooltip', () => {
    const href = '/'
    const title = 'Rocket'
    const { queryByTestId } = render(
      <IconButton tooltip icon={<GoRocket />} title={title} href={href} />
    )
    expect(queryByTestId('tooltip-container')).toBeInTheDocument()
  })

  it('can be disabled', () => {
    const onClick = jest.fn()
    const { getByTitle } = render(
      <IconButton
        onClick={onClick}
        icon={<GoRocket />}
        title="Rocket"
        disabled={true}
      />
    )
    const btn = getByTitle(/Rocket/i)
    userEvent.click(btn)
    expect(onClick).not.toHaveBeenCalled()
  })
})
