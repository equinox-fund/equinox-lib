import Typography, { TypographyProps } from '../../typography/Typography'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)
dayjs.extend(utc)

export interface DisplayDateProps {
  date: string
  format?: 'timeTo' | 'date' | 'dateTime' | 'time'
  utc?: boolean
  TypographyProps?: TypographyProps
}

export const DATE_FORMAT = 'D MMM, YYYY'
export const DATE_TIME_FORMAT = 'D MMM YYYY, HH:mm'
export const TIME = 'HH:mm'

const DisplayDate: React.FC<DisplayDateProps> = ({
  date,
  format = 'date',
  utc,
  TypographyProps = {}
}) => {
  if (!date) return <Typography {...TypographyProps}>TBD</Typography>

  const instance = utc ? dayjs(date).utc() : dayjs(date)
  let formattedDate = ''
  const utcLabel = utc ? ' UTC' : ''

  if (format === 'date') {
    formattedDate = instance.format(DATE_FORMAT)
  } else if (format === 'dateTime') {
    formattedDate = instance.format(DATE_TIME_FORMAT)
  } else if (format === 'timeTo') {
    formattedDate = instance.fromNow()
  } else if (format === 'time') {
    formattedDate = instance.format(TIME)
  }

  return (
    <Typography {...TypographyProps}>
      {formattedDate}
      {utcLabel}
    </Typography>
  )
}

export default DisplayDate
