interface SellProps {
  className?: string
  disabled?: boolean
}

const Sell: React.FC<SellProps> = ({ className, disabled = false }) => {
  const getStroke = () => {
    if (disabled) {
      return '#323232'
    }
    return '#6560BD'
  }

  return (
    <svg
      width="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M13 15H5C3.895 15 3 14.105 3 13V5C3 3.895 3.895 3 5 3H16C17.105 3 18 3.895 18 5V9"
        stroke={getStroke()}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.5 16.5L13 15L11.5 13.5"
        stroke={getStroke()}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 12V11C7 9.895 7.895 9 9 9H18H19C20.105 9 21 9.895 21 11V19C21 20.105 20.105 21 19 21H9C7.895 21 7 20.105 7 19V19V18"
        stroke={getStroke()}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
export default Sell
