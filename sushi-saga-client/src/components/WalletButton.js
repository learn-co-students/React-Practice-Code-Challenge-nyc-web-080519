import React from 'react'

const WalletButton = (props) => {
  return <button onClick={() => props.walletClick()}>
          Add $$
        </button>
}

export default WalletButton