import { theme } from 'twin.macro'

interface CloseProps {
  className?: string
  color?: 'white' | 'black'
}

const Close: React.FC<CloseProps> = ({ className, color = 'white' }) => {
  const strokeColor =
    color === 'white' ? theme`colors.secondary` : theme`colors.neutral.dark`

  return (
    <svg
      width="100%"
      className={className}
      viewBox="0 0 17 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="1.55563"
        y1="2"
        x2="15.4149"
        y2="15.8593"
        stroke={strokeColor}
        strokeWidth="2.2"
        strokeLinecap="square"
      />
      <line
        x1="15"
        y1="2.55563"
        x2="1.55564"
        y2="16"
        stroke={strokeColor}
        strokeWidth="2.2"
        strokeLinecap="square"
      />
    </svg>
  )
}

export default Close
