import { v4 as uuidv4 } from 'uuid'

interface SolanaProps {
  className?: string
}

const Solana: React.FC<SolanaProps> = ({ className }) => {
  const id = uuidv4()

  return (
    <svg
      width="100%"
      viewBox="0 0 398 312"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#solana_clip)">
        <path
          d="M64.6001 237.9C67.0001 235.5 70.3001 234.1 73.8001 234.1H391.2C397 234.1 399.9 241.1 395.8 245.2L333.1 307.9C330.7 310.3 327.4 311.7 323.9 311.7H6.50014C0.700139 311.7 -2.19986 304.7 1.90014 300.6L64.6001 237.9Z"
          fill={`url(#solana_gradient_1_${id})`}
        />
        <path
          d="M64.6001 3.8C67.1001 1.4 70.4001 0 73.8001 0H391.2C397 0 399.9 7 395.8 11.1L333.1 73.8C330.7 76.2 327.4 77.6 323.9 77.6H6.50014C0.700139 77.6 -2.19986 70.6 1.90014 66.5L64.6001 3.8Z"
          fill={`url(#solana_gradient_2_${id})`}
        />
        <path
          d="M333.1 120.1C330.7 117.7 327.4 116.3 323.9 116.3H6.50014C0.700139 116.3 -2.19986 123.3 1.90014 127.4L64.6001 190.1C67.0001 192.5 70.3001 193.9 73.8001 193.9H391.2C397 193.9 399.9 186.9 395.8 182.8L333.1 120.1Z"
          fill={`url(#solana_gradient_3_${id})`}
        />
      </g>
      <defs>
        <linearGradient
          id={`solana_gradient_1_${id}`}
          x1="360.879"
          y1="-37.4554"
          x2="141.213"
          y2="383.294"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00FFA3" />
          <stop offset="1" stopColor="#DC1FFF" />
        </linearGradient>
        <linearGradient
          id={`solana_gradient_2_${id}`}
          x1="264.829"
          y1="-87.6014"
          x2="45.1631"
          y2="333.147"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00FFA3" />
          <stop offset="1" stopColor="#DC1FFF" />
        </linearGradient>
        <linearGradient
          id={`solana_gradient_3_${id}`}
          x1="312.549"
          y1="-62.688"
          x2="92.8823"
          y2="358.061"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00FFA3" />
          <stop offset="1" stopColor="#DC1FFF" />
        </linearGradient>
        <clipPath id="solana_clip">
          <rect width="397.7" height="311.7" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default Solana
