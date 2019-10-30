import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  // console.log("Sushi Container props:", props)
  let sushisArray = props.sushis.map(sushi => <Sushi key={sushi.id} sushi={sushi} eatSushi={props.eatSushi} />)
  return (
    <Fragment>
      <div className="belt">
        {
          sushisArray
        }
        <MoreButton clickedMoreButton={props.clickedMoreButton} />
      </div>
    </Fragment>
  )
}

export default SushiContainer