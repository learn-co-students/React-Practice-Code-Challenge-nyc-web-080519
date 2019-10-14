import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  // console.log(props)
  // console.log(props.sushi)
  let currentSushi = props.sushi.slice(props.counter, props.counter + 4)
  let sushiArray = currentSushi.map(sushiObj => <Sushi key = {sushiObj.id} info = {sushiObj} eatSushi = {props.eatSushi}/>)
  return (
    <Fragment>
      <div className="belt">
        {sushiArray}
        <MoreButton incrementCounter = {props.incrementCounter} counter = {props.counter}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer