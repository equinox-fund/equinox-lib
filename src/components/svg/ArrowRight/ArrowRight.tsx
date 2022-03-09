interface ArrowRightProps {
  className?: string
}

const ArrowRight: React.FC<ArrowRightProps> = ({ className }) => (
  <svg
    width="7"
    height="12"
    viewBox="0 0 7 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M1 1L6.00002 6.00002L1 11" stroke="white" />
  </svg>
)

export default ArrowRight
