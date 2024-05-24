import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col gap-12 md:flex-row md:justify-between'>
      <ul className='flex gap-2 font-lato text-gray-400'>
        <li>
          <a href='#'>Facebook</a>
        </li>
        <li>
          <a href='#'>Instagram</a>
        </li>
        <li>
          <a href='#'>Youtube</a>
        </li>
      </ul>
      <div className='flex gap-2'>
        <img src='./src/assets/Help-Avatar.svg'></img>
        <div>
          <p className='font-playfair font-thin'>Have any uestion?</p>
          <a href='#' className='font-lato font-medium'>Talk to a specialist</a>
        </div>
      </div>
    </div>
  )
}

export default Footer