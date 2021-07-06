import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import WalletButton from '../components/WalletButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  const sushiDivs = props.sushiCollection.map(sushi => {
    return (
      <Sushi 
        key={sushi.id}
        id={sushi.id}
        image={sushi.img_url}
        price={sushi.price}
        name={sushi.name}
        eaten={sushi.eaten}
        sushiClick={props.sushiClick}
      />
    )
  })
  
  
  return (
    <Fragment>
      <div className="belt">
        {sushiDivs}
        <MoreButton moreClick={props.moreClick}/>
        <WalletButton walletClick={props.walletClick}/>
      </div>
    </Fragment>
  )

}

export default SushiContainer

// has to get sushi from server
// render 4 at a time
// loop through data and render a sushi componenet for each one
// for Sushi
// √* onClick callback to eat sushi
// √* image source
// √* name
// √* price
// √* eatan - boolean

// for MoreButton
// * give a callback to get more sushi