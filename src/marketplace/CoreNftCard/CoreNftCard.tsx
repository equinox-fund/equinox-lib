import Skeleton from '../../components/common/Skeleton'
import Title from '../../components/common/Title'
import Typography from '../../components/common/Typography'
import Button from '../../components/common/Button'
import Image from '../../components/common/Image'
import Card from '../../components/common/Card'
import DisplayCurrency from '../../components/common/DisplayCurrency'
import { ReactNode } from 'react'
import styles from './styles'

export interface CoreNftCardProps {
  name: string
  imageEl: ReactNode
  price: number
  usdPrice: number
  loading?: boolean
  onClickPurchase?: (e: EventTarget) => void
}

const CoreNftCard: React.FC<CoreNftCardProps> = ({
  name,
  imageEl,
  price,
  usdPrice,
  loading,
  onClickPurchase
}) => {
  const handleClickBuy = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (loading) return
    onClickPurchase(e)
  }

  const skeleton = (
    <>
      <Skeleton className="w-20 h-6 mb-6 mx-auto" />
      <Skeleton className="card-image-wrapper" />
      <Skeleton className="w-24 h-6 mb-2 mx-auto" />
      <Skeleton className="w-48 h-6 mb-6 mx-auto" />
      <Skeleton className="w-40 h-12 mx-auto" />
    </>
  )

  return (
    <div css={styles}>
      <WithCard>
        {loading ? (
          skeleton
        ) : (
          <>
            <Title size="large" className="mb-6">
              {name}
            </Title>
            <div className="card-image-wrapper">
              <div className="card-image">
                {imageEl}
              </div>
            </div>
            <div className="mb-8">
              <div className="md:hidden mb-8">
                <div className="mb-4">
                  <Typography>IDO</Typography>
                  <Typography color="muted">
                    {name === 'Summer'
                      ? 'Guaranteed allocation'
                      : 'Lottery/FCFS'}
                  </Typography>
                </div>
                <div className="mb-4">
                  <Typography>INO</Typography>
                  <Typography color="muted">Lottery</Typography>
                </div>
              </div>
              <Title size="large" className="mb-1">{price} BNB</Title>
              {usdPrice && (
                <DisplayCurrency
                  amount={usdPrice}
                  maximumDecimals={0}
                  TypographyProps={{
                    color: 'muted'
                  }}
                />
              )}
            </div>
            <Button
              variant="contained"
              size="large"
              className="mx-auto"
              onClick={handleClickBuy}
              disabled={loading}
            >
              Buy Now
            </Button>
          </>
        )}
      </WithCard>
    </div>
  )
}

const WithCard = ({ children }) => (
  <>
    <div className="md:hidden">
      <Card>{children}</Card>
    </div>
    <div className="hidden md:block">
      {children}
    </div>
  </>
)

export default CoreNftCard
