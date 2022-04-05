import Skeleton from '../../components/common/Skeleton'
import Title from '../../components/common/Title'
import Typography from '../../components/common/Typography'
import TypographyWithLabel from '../../components/common/TypographyWithLabel'
import Button from '../../components/common/Button'
import Divider from '../../components/common/Divider'
import Image from '../../components/common/Image'
import Card from '../../components/common/Card'
import SellIcon from '../../components/svg/Sell'
import TransferIcon from '../../components/svg/Transfer'
import DisplayCurrency from '../../components/common/DisplayCurrency'
import { FiSettings } from 'react-icons/fi'
import { ReactNode } from 'react'
import styles from './styles'

export interface ProfileNftCardProps {
  name: string
  description?: string
  imageEl: ReactNode
  available: number
  lowestPrice?: number
  price: number
  className?: string
  loading?: boolean
  onClick?: (e: EventTarget) => void
  onClickPurchase?: (e: EventTarget) => void
  amount: number
  sale: number
  showCancel?: boolean
  showControls?: boolean
  showSettings?: boolean
  handleClickCancel: (e) => void
  handleClickSell: (e) => void
  handleClickTransfer: (e) => void
  handleToggleSettings:(e) => void
}

const ProfileNftCard: React.FC<ProfileNftCardProps> = ({
  name,
  description,
  imageEl,
  available,
  lowestPrice,
  price,
  className,
  loading,
  onClick,
  onClickPurchase,
  amount,
  sale,
  showCancel = false,
  showControls = false,
  showSettings = false,
  handleClickCancel,
  handleClickSell,
  handleClickTransfer,
  handleToggleSettings
}) => {
  const handleClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (loading) return
    onClick(e)
  }

  const handleClickBuy = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (loading) return
    onClickPurchase(e)
  }

  const skeleton = (
    <>
      <Skeleton className="w-20 h-6 mb-6" />
      <Skeleton className="card-image-wrapper" />
      <Skeleton className="w-full h-6 mb-2" />
      <Skeleton className="w-full h-6 mb-6" />
    </>
  )

  return (
    <div css={styles} className={className} onClick={handleClick}>
      <Card hoverAsLink>
        {loading ? (
          skeleton
        ) : (
          <>
            <div className="card-row mb-6">
              <Title size="medium">{name}</Title>
              {showSettings && (
                <div
                  style={{ cursor: 'pointer' }}
                  onClick={handleToggleSettings}
                >
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
                        onClick={handleClickCancel}
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
                    onClick={handleClickSell}
                    className="card-cta"
                  >
                    <SellIcon className="w-6 mr-2" />
                    Sell
                  </Button>
                  <Button
                    variant="text"
                    color="secondary"
                    onClick={handleClickTransfer}
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
