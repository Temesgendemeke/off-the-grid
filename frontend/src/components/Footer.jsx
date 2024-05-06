import React from 'react'

const Footer = () => {
    const data = new Date()
  return (
    <div className='text-white text-center'>
        <p>&copy;{data.getFullYear()}</p>
    </div>
  )
}

export default Footer