import React from 'react'

export default function Header({header, subHeader}) {
  return (
    <div className='header'>
      <h2>{header}</h2>
      <p>{subHeader}</p>
    </div>
  )
}
