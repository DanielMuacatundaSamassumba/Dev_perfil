import React from 'react'

export default function Color() {
  return (
    <div className="color-content">
    <span className='red' onClick={ setColors({color:'rgb(235, 235, 41)'})}></span>
    <span className='black' ></span>
    <span className='orange' ></span>
    <span className='green' ></span>
    <span className='gray'></span>
    <span className='blue'></span>
</div>
  )
}
