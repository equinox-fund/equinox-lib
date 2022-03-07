import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import Button from '../Button'
import Tooltip from './Tooltip'

describe('Components/Tooltip', () => {
  it('should render', async () => {
    const label = 'Hello'
    const { queryByTestId } = render(
      <Tooltip label={label}>
        <Button>Hello</Button>
      </Tooltip>
    )

    // const element = queryByTestId('tooltip-container')
    // fireEvent.mouseOver(element)
    // await waitFor(() => screen.queryByTestId('tootlip'))
    // const tooltip = screen.queryByTestId('tooltip')
    // expect(tooltip).toBeInTheDocument()
  })

  // it('should dissapear when mouse leave', async () => {
  //   // const label = 'Hello'
  //   // const { queryByTestId } = render(
  //   //   <Popper tooltip={label}>
  //   //     <Button>Hello</Button>
  //   //   </Popper>
  //   // )
  //   // fireEvent.mouseEnter(queryByTestId('popper-container'))
  //   // fireEvent.mouseLeave(queryByTestId('popper-container'))
  //   // await waitFor(() => screen.queryByTestId('tootlip'))
  //   // const tooltip = screen.queryByTestId('tooltip')
  //   // expect(tooltip).not.toBeInTheDocument()
  // })
  // it('should render for mobile', async () => {
  //   const label = 'Hello'
  //   const { queryByTestId } = render(
  //     <Popper tooltip={label}>
  //       <Button>Hello</Button>
  //     </Popper>
  //   )
  //   fireEvent.click(queryByTestId('popper-container'))
  //   await waitFor(() => screen.queryByTestId('tootlip'))
  //   const tooltip = screen.queryByTestId('tooltip')
  //   expect(tooltip).toBeInTheDocument()
  // })
  // it('should not render if label is undefined', async () => {
  //   // const { queryByTestId } = render(
  //   //   <Popper>
  //   //     <Button>Hello</Button>
  //   //   </Popper>
  //   // )
  //   // fireEvent.mouseOver(queryByTestId('popper-container'))
  //   // fireEvent.click(queryByTestId('popper-container'))
  //   // await waitFor(() => screen.queryByTestId('tootlip'))
  //   // const tooltip = screen.queryByTestId('tooltip')
  //   // expect(tooltip).not.toBeInTheDocument()
  // })
})
