import React from 'react'
import "./SectionTitle.css"
const SectionTitle = (props) => {
    const classes = props.className
    return (
        <div className={`sectiontitle ${classes}`}>{props.text} :</div>
  )
}

export default SectionTitle