import Skeleton from '../../components/common/Skeleton'
import Title from '../../components/common/Title'
import Typography from '../../components/common/Typography'
import Button from '../../components/common/Button'
import Image from '../../components/common/Image'
import Card from '../../components/common/Card'
import DisplayCurrency from '../../components/common/DisplayCurrency'
import React from 'react'
import styles from './styles'

export interface NftCardProps {
  name: string
  description?: string
  image: string
  available: boolean
  lowestPrice?: number
  price: number
  className?: string
  loading?: boolean
  onClick: (e: EventTarget) => void
  onClickPurchase: (e: EventTarget) => void
}

const NftCard: React.FC<NftCardProps> = ({
  name,
  description,
  image,
  available,
  lowestPrice,
  price,
  className,
  loading,
  onClick,
  onClickPurchase,
  children
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
      <Skeleton className="w-20 h-4 mb-4" />
      <Skeleton className="card-image-wrapper" />
      <Skeleton className="w-16 h-4 mb-2" />
      <Skeleton className="w-32 h-4 mb-6" />
      <Skeleton className="w-24 h-4" />
    </>
  )

  return (
    <div css={styles} className={className} onClick={handleClick}>
      <Card>
        {loading ? skeleton : (
          <>
            <Title size="small" className="mb-6">
              {name}
            </Title>
            <div className="card-image-wrapper">
              <Image
                src={image}
                alt={name}
                className="card-image"
                showPreloader
              />
            </div>
            <div className="mb-6">
              <Title className="mb-2">{price} BNB</Title>
              {description && (
                <Typography caption size="large" className="mb-2">
                  {description}
                </Typography>
              )}
              {lowestPrice && (
                <Typography caption size="large" color="muted">
                  Lowest price
                  <DisplayCurrency
                    amount={lowestPrice}
                    TypographyProps={{
                      caption: true,
                      size: 'large',
                      color: 'muted',
                      className: 'inline-block ml-1'
                    }}
                  />
                  <span className="mx-1.5">{'•'}</span>
                  <span>{available} available</span>
                </Typography>
              )}
            </div>
            <Button
              variant="contained"
              onClick={handleClickBuy}
              disabled={loading}
            >
              Buy Now
            </Button>
          </>
        )}
      </Card>
    </div>
  )
}

export default NftCard
