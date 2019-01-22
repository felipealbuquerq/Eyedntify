import React from 'react'
import CardHeader from './CardHeader'
import CardFooter from './CardFooter'
import Icon from '../../utils/Icon'
import classnames from 'classnames'
const Card = ({ body, dispatch }) => {
  let counter = 0;

  const likeHandler = () => {
    if (++counter === 2) {
      dispatch({ type: 'LIKE_IMAGE', payload: body.id })
      counter = 0
    }
  }


  return (
    <div className="EyeCard">
      <CardHeader logo={body.logo} author={body.author} />
      <figure onClick={likeHandler} >
        <img src={body.image}  alt="Your pic!" />
        {
          <Icon
            className={classnames({ "hide": !body.liked })}
            size={"30rem"}
            icon={"heartFull"} />
        }
      </figure>
      <CardFooter body={body} dispatch={dispatch} />
    </div>
  )
}

export default Card
