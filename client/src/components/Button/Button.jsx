import React from 'react'
import "./Button.css"
const Button = (props) => {
    const classes = props.className
  return (
    <div className={`button ${classes}`}>{ props.text}</div>
  )
}

export default Button