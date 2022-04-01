import Divider from '../../../components/common/Divider'
import DisplayDate from '../../../components/common/DisplayDate'
import Typography from '../../../components/common/Typography'
import { NftOfferProps } from '../NftListing'
import React from 'react'
import styles from './styles'

export interface NftListingOffersProps {
  offers: NftOfferProps[]
}

const NftListingOffers: React.FC<NftListingOffersProps> = ({ offers }) => (
  <div css={styles}>
    {!offers || offers.length === 0 ? (
      <>
        <Typography className="mb-2">
          No offers to display
        </Typography>
        <Typography color="muted" caption>
          Looks like nobody is selling this NFT at the moment. Check later to
          see if anything has happened.
        </Typography>
      </>
    ) : (
      offers.map(({ uid, price, amount, owner }, i) => (
        <div className="offer-row" key={`offer-${i}`}>
          <Typography size="small" className="">
            {amount} items @ {price} BNB
          </Typography>
          <Typography size="small" color="muted" className="opacity-40">
            {owner}
          </Typography>
        </div>
      ))
    )}
  </div>
)
export default NftListingOffers
