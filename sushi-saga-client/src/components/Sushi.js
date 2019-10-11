import React from 'react'
// import React, { Fragment } from 'react'

const Sushi = (props) => {

  const sushiClickHandler = () => {
    props.eatSushi(props.sushi)
  }

  return (
    <div className="sushi">
      <div className="plate" 
           onClick={props.sushi.isEaten ? null : sushiClickHandler}>
        { props.sushi.isEaten ? null : <img alt="" src={props.sushi.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  )
}

export default Sushi