import React from 'react'
import { Dish_URL } from '../Utils/constant'

function Dish(propsObject) {
    const {dishData} = propsObject
    const {imageId,action} = dishData
    const {text} = action

  return (
    <>
    <img
    src={Dish_URL + imageId}
    />
    </>
  )
}

export default Dish