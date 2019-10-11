import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  const sushiPlatesArr = props.sushiArr.map(sushi => {return <Sushi key={sushi.id} sushi={sushi} purchasedPlate={props.purchasedPlate}  state={props.state}/>})

  return (
    <Fragment>
      <div className="belt">
        {
          sushiPlatesArr
        }
        <MoreButton moreButtonHandler={props.moreButtonHandler}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer