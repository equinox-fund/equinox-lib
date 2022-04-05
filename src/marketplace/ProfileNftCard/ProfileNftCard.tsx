import Skeleton from '../../components/common/Skeleton'
import Title from '../../components/common/Title'
import Typography from '../../components/common/Typography'
import TypographyWithLabel from '../../components/common/TypographyWithLabel'
import Button from '../../components/common/Button'
import Divider from '../../components/common/Divider'
import Card from '../../components/common/Card'
import SellIcon from '../../components/svg/Sell'
import TransferIcon from '../../components/svg/Transfer'
import { FiSettings } from 'react-icons/fi'
import { ReactNode } from 'react'
import styles from './styles'

export interface ProfileNftCardProps {
  name: string
  imageEl: ReactNode
  className?: string
  loading?: boolean
  amount: number
  sale: number
  showCancel?: boolean
  showControls?: boolean
  showSettings?: boolean
  onClick: (e) => void
  onClickCancel: (e) => void
  onClickSell: (e) => void
  onClickTransfer: (e) => void
  onToggleSettings: (e) => void
}

const ProfileNftCard: React.FC<ProfileNftCardProps> = ({
  name,
  imageEl,
  className,
  loading,
  amount,
  sale,
  showCancel = false,
  showControls = false,
  showSettings = false,
  onClick,
  onClickCancel,
  onClickSell,
  onClickTransfer,
  onToggleSettings
}) => {
  const skeleton = (
    <>
      <Skeleton className="w-20 h-6 mb-6" />
      <Skeleton className="card-image-wrapper" />
      <Skeleton className="w-full h-6 mb-2" />
      <Skeleton className="w-full h-6 mb-6" />
    </>
  )

  return (
    <div css={styles} className={className} onClick={onClick}>
      <Card hoverAsLink>
        {loading ? (
          skeleton
        ) : (
          <>
            <div className="card-row mb-6">
              <Title size="medium">{name}</Title>
              {showSettings && (
                <div style={{ cursor: 'pointer' }} onClick={onToggleSettings}>
                  <FiSettings className="w-5 h-auto text-neutral-silver" />
                </div>
              )}
            </div>
            <div className="card-image-wrapper">
              <div className="card-image">{imageEl}</div>
            </div>
            <TypographyWithLabel
              label="Amount"
              TypographyProps={{ color: 'secondary' }}
            >
              {amount}
            </TypographyWithLabel>
            <div className="card-row">
              <div>
                <Typography color="muted">
                  On sale
                  {showCancel && (
                    <div className="inline-block ml-4">
                      <Button
                        variant="outlined"
                        color="secondary"
                        onClick={onClickCancel}
                      >
                        Cancel
                      </Button>
                    </div>
                  )}
                </Typography>
              </div>
              <Typography>{sale}</Typography>
            </div>
            {showControls && (
              <>
                <Divider className="mt-6 mb-4" horizontal />
                <div className="card-footer">
                  <Button
                    variant="text"
                    color="secondary"
                    onClick={onClickSell}
                    className="card-cta"
                  >
                    <SellIcon className="w-6 mr-2" />
                    Sell
                  </Button>
                  <Button
                    variant="text"
                    color="secondary"
                    onClick={onClickTransfer}
                    className="card-cta"
                  >
                    <TransferIcon className="w-6 mr-2" />
                    Transfer
                  </Button>
                </div>
              </>
            )}
          </>
        )}
      </Card>
    </div>
  )
}

export default ProfileNftCard
