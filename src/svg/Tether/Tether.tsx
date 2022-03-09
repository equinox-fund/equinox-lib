interface TetherProps {
  className?: string
}

const Tether: React.FC<TetherProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 720 720"
    width="100%"
    className={className}
  >
    <path
      id="path0_fill"
      fill="#26a17b"
      d="M360 0c198.8 0 360 161.2 360 360S558.8 720 360 720 0 558.9 0 360 161.2 0 360 0z"
    />
    <g transform="translate(336.29 -181.139)" id="Vector_1_">
      <path
        id="path1_fill"
        fill="#ffffff"
        d="M74.4 501v-53.6h122.5v-81.6h-333.5v81.6h122.5V501c-99.5 4.6-174.4 24.3-174.4 47.9 0 23.6 74.9 43.3 174.4 47.9v171.5h88.6V596.8c99.4-4.6 174.1-24.3 174.1-47.9-.1-23.6-74.8-43.3-174.2-47.9zm.1 81.3c-2.5.1-15.3.9-43.9.9-22.9 0-38.9-.6-44.6-.9v.1c-87.9-3.9-153.6-19.2-153.6-37.5S-102 511.3-14 507.4V567c5.8.4 22.2 1.4 45 1.4 27.3 0 41-1.1 43.6-1.4v-59.8c87.8 3.9 153.3 19.2 153.3 37.5-.2 18.3-65.7 33.6-153.4 37.6"
      />
    </g>
  </svg>
)

export default Tether
