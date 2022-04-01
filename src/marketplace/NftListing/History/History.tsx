import Divider from '../../../components/common/Divider'
import DisplayDate from '../../../components/common/DisplayDate'
import Typography from '../../../components/common/Typography'
import { NftHistoryProps } from '../NftListing'
import styles from './styles'

export interface NftListingHistoryProps {
  history: NftHistoryProps[]
}

const NftListingHistory: React.FC<NftListingHistoryProps> = ({ history }) => (
  <div css={styles}>
    {!history || history.length === 0 ? (
      <>
        <Typography className="mb-2">
          No history to display
        </Typography>
        <Typography color="muted" caption>
          Looks like this NFT has no purchase history.
        </Typography>
      </>
    ) : history.map(({ createdAt, transactionHash, operator, action }, i) => (
      <div className="history-row" key={`history-${i}`}>
        <div>
          <Typography size="small" className="mb-0.5">
            {operator?.slice(0, 4)}...
            {operator?.slice(-4)}
          </Typography>
          <DisplayDate
            date={createdAt}
            format="dateTime"
            TypographyProps={{ color: 'muted', caption: true, className: 'opacity-40' }}
          />
        </div>
        <Typography size="small">{action}</Typography>
      </div>
    ))}
  </div>
)
export default NftListingHistory
