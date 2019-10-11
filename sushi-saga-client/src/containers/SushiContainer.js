import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          props.sushi.map((sush) => {
            return <Sushi key={sush.id} id={sush.id} name={sush.name} img_url={sush.img_url} price={sush.price} eatenSushi={props.eatenSushi} eatSushi={props.eatSushi}/>
          })
        }
        <MoreButton moreSushi={props.moreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer