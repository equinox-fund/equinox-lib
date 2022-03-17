import React, { Fragment } from 'react'
import Typography, { TypographyProps } from '../Typography/Typography'

export interface DisplayCurrencyProps {
  amount: string | number | Array<string | number>
  decimals?: number
  maximumDecimals?: number
  format?: 'currency' | 'decimal'
  defaultText?: string | number
  TypographyProps?: TypographyProps | boolean
}

interface DisplayProps extends DisplayCurrencyProps {
  amount: string | number
  addComma?: boolean
}

const Display: React.FC<DisplayProps> = ({
  amount,
  decimals = 0,
  maximumDecimals = 3,
  format = 'currency',
  TypographyProps,
  addComma
}) => {
  const _amount = amount.toString()

  const formattedCurrency = parseFloat(_amount).toLocaleString('en-US', {
    style: format,
    currency: 'USD',
    minimumFractionDigits: decimals,
    maximumFractionDigits: maximumDecimals
  })

  return (
    <Typography {...TypographyProps}>
      {format === 'decimal' ? '$' : ''}
      {formattedCurrency}
      {addComma && ', '}
    </Typography>
  )
}

const DisplayCurrency: React.FC<DisplayCurrencyProps> = (props) => {
  const { amount, TypographyProps, defaultText, ...rest } = props

  if (!amount) {
    return (
      <Typography {...TypographyProps}>{defaultText || 'TBD'}</Typography>
    )
  }

  const _amount = amount.toString().split(',')

  if (_amount.length === 1) {
    return (
      <Display
        TypographyProps={TypographyProps}
        amount={_amount[0]}
        {...rest}
      />
    )
  }

  const elements = _amount.map((content, i) => (
    <Fragment key={content}>
      <Display
        TypographyProps={TypographyProps}
        amount={content}
        {...rest}
        addComma={_amount.length > 1 && i + 1 < _amount.length}
      />
    </Fragment>
  ))

  return <div className="flex space-x-1">{elements}</div>
}

export default DisplayCurrency
