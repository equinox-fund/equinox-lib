import React from 'react'
import BSCIcon from '../../svg/BinanceSmartChain'
import EthIcon from '../../svg/Ethereum'
import ChainId from '../../../enums/chainId.enums'
import { BsQuestionOctagonFill } from 'react-icons/bs'

export interface ChainIconProps {
  chainId: ChainId
  className?: string
}

const ChainIcon: React.FC<ChainIconProps> = ({ chainId, className }) => {
  if ([ChainId.BSC, ChainId.BSC_TESTNET].includes(chainId)) {
    return <BSCIcon className={className} />
  }

  if ([ChainId.MAINNET, ChainId.RINKEBY].includes(chainId)) {
    return <EthIcon className={className} />
  }

  return (
    <BsQuestionOctagonFill
      data-testid="unknown-chain-svg"
      className={className}
      size={22}
    />
  )
}

export default ChainIcon
