import React, { Fragment } from 'react'

const Sushi = (props) => {
  // console.log("sushi card props:", props.sushi)
  return (
    // <h1>sushi</h1>
    <div className="sushi">
      <div className="plate" 
           onClick={(event) => props.eatSushi(event.target.id)}>
        { 
          /* Tell me if this sushi has been eaten! */ 
          false ?
            null
          :
            <img id={props.sushi.id} src={props.sushi.img_url} alt="" width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  )
}

export default Sushi