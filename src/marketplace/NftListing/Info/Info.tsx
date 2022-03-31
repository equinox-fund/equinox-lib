import Divider from '../../../components/common/Divider'
import DisplayDate from '../../../components/common/DisplayDate'
import Typography from '../../../components/common/Typography'
import { NftProps } from '../NftListing'
import React from 'react'

export interface NftListingInfoProps {
  nft: NftProps
  fee: number
}

const NftListingInfo: React.FC<NftListingInfoProps> = ({ nft: { createdAt, offers, totalSupply, description }, fee }) => (
  <>
    <div className="max-w-xs">
      <div className="nft-tab-content-row">
        <Typography color="muted">Created on</Typography>
        <Typography>
          <DisplayDate date={createdAt} />
        </Typography>
      </div>
      <div className="nft-tab-content-row">
        <Typography color="muted">Owner</Typography>
        <Typography>
          {offers?.[0]?.owner?.slice(0, 4)}...
          {offers?.[0]?.owner?.slice(-4)}
        </Typography>
      </div>
      <div className="nft-tab-content-row">
        <Typography color="muted">Total supply</Typography>
        <Typography>{totalSupply}</Typography>
      </div>
      <div className="nft-tab-content-row">
        <Typography color="muted">Royalty fee</Typography>
        <Typography>{100 * fee}%</Typography>
      </div>
    </div>
    <Divider horizontal className="my-6" />
    <Typography>{description}</Typography>
  </>
)
export default NftListingInfo
