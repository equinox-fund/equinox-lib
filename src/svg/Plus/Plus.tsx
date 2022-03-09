interface PlusProps {
  className?: string
}

const Plus: React.FC<PlusProps> = ({ className }) => (
  <svg
    width="100%"
    viewBox="0 0 26 26"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <line x1="13.5" y1="-2.18557e-08" x2="13.5" y2="26" stroke="white" />
    <line x1="26" y1="13.5" x2="-4.37114e-08" y2="13.5" stroke="white" />
  </svg>
)

export default Plus
