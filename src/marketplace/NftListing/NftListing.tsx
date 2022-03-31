import Skeleton from '../../components/common/Skeleton'
import Title from '../../components/common/Title'
import Typography from '../../components/common/Typography'
import Button from '../../components/common/Button'
import Image from '../../components/common/Image'
import DisplayCurrency from '../../components/common/DisplayCurrency'
import RoundedTabs from '../../components/common/RoundedTabs'
import NftInfo from './Info'
import NftHistory from './History'
import React from 'react'
import styles from './styles'

export interface NftHistoryProps {
  operator: string
  action: string
  createdAt: string
  transactionHash: string
}

export interface NftProps {
  name: string
  createdAt: string
  image: string
  price: number
  description?: string
  marketplaceSupply: number
  totalSupply: number
  offers?: {
    uid: string
    price: number
    amount: number
    owner: string
  }[]
  history: NftHistoryProps[]
}

export interface NftListingProps {
  nft: NftProps
  loading?: boolean
  ethPrice: number
  user: any
  checkNftFlags: (nft: any, address: string) => any
  onClickNFTPendingPurchase?: (e: EventTarget) => void
  onNavClick: (value: string) => void
  activeNavItem: string
  royaltyFeeDetails: {
    fee: number
    feeReceiver: string
  }
}

const NftListing: React.FC<NftListingProps> = ({
  nft,
  loading,
  ethPrice,
  user,
  checkNftFlags,
  onClickNFTPendingPurchase,
  onNavClick,
  activeNavItem,
  royaltyFeeDetails
}) => {
  // const handleClickBuy = (e) => {
  //   e.preventDefault()
  //   e.stopPropagation()
  //   if (loading) return
  //   onClickPurchase(e)
  // }

  const {
    name,
    createdAt,
    image,
    description,
    marketplaceSupply,
    totalSupply,
    offers,
    history
  } = nft

  const lowestPrice = (offers[0]?.price * ethPrice * 100) / 100

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
    <section css={styles}>
      {loading ? (
        skeleton
      ) : (
        <>
          <div className="nft-image-wrapper">
            <Image src={image} alt={name} className="nft-image" />
          </div>
          <div className="nft-details">
            <div className="mb-16">
              <Title size="x-large" className="mb-10">
                {name}
              </Title>
              <div className="mb-6">
                <Title size="large">
                  {offers?.[0] ? `${offers[0]?.price} BNB` : `No offers`}
                </Title>
                {offers?.[0] && (
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
                      <span className="mx-2">{'•'}</span>
                      <span>{marketplaceSupply} available</span>
                    </Typography>
                  </>
                )}
              </div>
              <Button
                variant="contained"
                size="x-large"
                disabled={
                  !checkNftFlags(nft, user?.address).canBuy || !user?.address
                }
                loading={!name}
                onClick={onClickNFTPendingPurchase}
              >
                {user?.address ? 'Buy now' : 'Connect your wallet to purchase'}
              </Button>
            </div>
            <div className="nft-tabs">
              <RoundedTabs
                tabs={[
                  {
                    value: 'info',
                    label: 'Info'
                  },
                  {
                    value: 'history',
                    label: 'History'
                  },
                  {
                    value: 'offers',
                    label: 'Offers'
                  }
                ]}
                onClickTab={(val) => onNavClick(val)}
                activeTab={activeNavItem}
              />
            </div>
            <div className="nft-tab-content">
              {activeNavItem === 'info' && (
                <NftInfo nft={nft} fee={royaltyFeeDetails.fee} />
              )}
              {activeNavItem === 'history' && (
                <NftHistory history={history} />
              )}
            </div>
          </div>
        </>
      )}
    </section>
  )
}

export default NftListing
