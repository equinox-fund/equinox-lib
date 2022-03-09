interface AlgorandProps {
  className?: string
}

const Algorand: React.FC<AlgorandProps> = ({ className }) => (
  <svg
    width="100%"
    className={className}
    viewBox="0 0 240 240"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M239.18 239.32H201.81L177.54 149.04L125.36 239.33H83.6398L164.29 99.57L151.31 51.05L42.5598 239.36H0.819824L138.64 0.640015H175.18L191.18 59.95H228.88L203.14 104.71L239.18 239.32Z"
      fill="white"
    />
  </svg>
)

export default Algorand
