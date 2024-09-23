import React from 'react'
import "./Button.css"
const Button = (props) => {
    const classes = props.className
  return (
    <div className={`button ${classes}`}>Button</div>
  )
}

export default Button