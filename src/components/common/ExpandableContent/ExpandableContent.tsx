import React, { ReactNode, useState } from 'react'
import classnames from 'classnames'
import Title from '../Title'
import MinusIcon from '../../svg/Minus'
import PlusIcon from '../../svg/Plus'
import Typography from '../Typography'
import Markup from '../Markup'
import styles from './styles'

export interface ExpandableContentProps {
  label: string
  children: string | ReactNode
}

const ExpandableContent: React.FC<ExpandableContentProps> = ({
  label,
  children
}) => {
  const [open, setOpen] = useState<boolean>(false)
  const isContentString = typeof children === 'string'

  return (
    <div css={styles} className={classnames('root', { open })}>
      <button type="button" className="label" onClick={() => setOpen(!open)}>
        <Title size="medium" weight="semibold" className="pr-8">
          {label}
        </Title>
        {open ? (
          <MinusIcon className="icon" />
        ) : (
          <PlusIcon className="icon" />
        )}
      </button>
      {open && (
        <div className="content">
          {isContentString && (
            <Typography>
              <Markup html={children} />
            </Typography>
          )}
          {!isContentString && children}
        </div>
      )}
    </div>
  )
}

export default ExpandableContent
