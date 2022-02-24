import styles from './styles'

import React from 'react'

export interface SpinnerProps {
  size?: 'small' | 'medium' | 'large'
  className?: string
}

const Spinner: React.FC<SpinnerProps> = ({ size = 'small', className }) => (
  <div css={styles({ size })} className={className} data-testid="spinner" />
)

export default Spinner
