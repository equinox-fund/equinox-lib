import Skeleton from '../../components/common/Skeleton'
import Title from '../../components/common/Title'
import Typography from '../../components/common/Typography'
import Button from '../../components/common/Button'
import Image from '../../components/common/Image'
import Card from '../../components/common/Card'
import DisplayCurrency from '../../components/common/DisplayCurrency'
import styles from './styles'

export interface MarketplaceNftCardProps {
  name: string
  description?: string
  image: string
  available: number
  lowestPrice?: number
  price: number
  className?: string
  loading?: boolean
  onClick?: (e: EventTarget) => void
  onClickPurchase?: (e: EventTarget) => void
}

const NftCard: React.FC<MarketplaceNftCardProps> = ({
  name,
  description,
  image,
  available,
  lowestPrice,
  price,
  className,
  loading,
  onClick,
  onClickPurchase
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
      <Skeleton className="w-24 h-6 mb-2" />
      <Skeleton className="w-48 h-6 mb-6" />
      <Skeleton className="w-40 h-12" />
    </>
  )

  return (
    <div css={styles} className={className} onClick={handleClick}>
      <Card hoverAsLink>
        {loading ? (
          skeleton
        ) : (
          <>
            <Title size="medium" className="mb-6">
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
            <div className="mb-8">
              <Title size="large">{price} BNB</Title>
              {description && <Typography>{description}</Typography>}
              {lowestPrice && (
                <>
                  <Typography color="muted">
                    Lowest price
                    <DisplayCurrency
                      amount={lowestPrice}
                      maximumDecimals={0}
                      TypographyProps={{
                        color: 'muted',
                        className: 'inline-block ml-1'
                      }}
                    />
                    <span className="mx-2 hidden xs:inline-block md:hidden lg:inline-block">
                      {'•'}
                    </span>
                    <span className="underline hidden xs:inline-block md:hidden lg:inline-block">
                      {available} available
                    </span>
                  </Typography>
                  <Typography
                    color="muted"
                    className="xs:hidden md:block lg:hidden underline"
                  >
                    {available} available
                  </Typography>
                </>
              )}
            </div>
            <Button
              variant="contained"
              size="large"
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
