import React, { Fragment } from 'react'

const Sushi = (props) => {

  return (
    <div className="sushi">
      <div className="plate">
        {  
          props.info.img_url ?
            null
          :
            <img src={props.info.img_url} width="100%" onClick={()=>props.clickHandler(props.info)}/>
        }
        <img src={props.info.img_url} width="100%" onClick={() => props.clickHandler(props.info)}/>
      </div>
      <h4 className="sushi-details"> 
        { props.info.name} - ${props.info.price}
      </h4>
    </div>
  )
}

export default Sushi