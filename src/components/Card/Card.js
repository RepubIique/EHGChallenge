import React from 'react'
import { ColorGen } from '../ColorGen/normalColorGen'
import './Card.css'

//create card component
export const Card = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <ColorGen />
        <h3>{props.title}</h3>
        <p>{props.content}</p>
      </div>
    </div>
  )
}
