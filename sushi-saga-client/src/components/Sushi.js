import React, { Fragment } from 'react'

const Sushi = (props) => {
  //checks if this sushi is in our array of eatenSushis passed down in props
  const eatenSushi = () => {
    return props.eatenSushis.includes(props.sushi)
  }

  //calls sushiClickHandler method passed down in props with this sushi (passes it all the way back up to App)
  const clickSushi = () => {
    props.sushiClickHandler(props.sushi)
  }

  return (
    <div className="sushi">
      {/* only call the clickSushi function is the sushi is not already eaten */}
      <div className="plate" onClick={eatenSushi() ? null : clickSushi}>
        {/* only show the sushi image if the sushi is not eaten */}
        {eatenSushi() ? null : <img src={props.sushi.img_url} width="100%" />}
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  )
}

export default Sushi