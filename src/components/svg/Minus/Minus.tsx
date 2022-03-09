interface MinusProps {
  className?: string
}

const Minus: React.FC<MinusProps> = ({ className }) => (
  <svg
    width="100%"
    viewBox="0 0 27 26"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <line
      y1="-0.5"
      x2="26"
      y2="-0.5"
      transform="matrix(-1 8.87165e-08 -0.701894 -0.712281 26 13)"
      stroke="white"
    />
  </svg>
)

export default Minus
