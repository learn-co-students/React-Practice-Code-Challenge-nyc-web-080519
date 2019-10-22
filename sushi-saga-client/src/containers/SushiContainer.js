import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  
  //When the sushi is click, the sushi's information should be used to
  //change the remaining budget

  return (
    <Fragment>
      <div className="belt">
        {
          (props.allSushi.slice(props.start, (props.start + 4))).map(sushiObj => <Sushi clickHandler={props.buySushi} info={sushiObj} />)
        }
        <MoreButton clickHandler={props.clickHandler}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer