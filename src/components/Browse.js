import React from 'react'
import Header from './Header'

const Browse = () => {
  return (
    <div>
      <Header></Header>

      
      <div className='py-20 flex justify-between'>
        <div className='flex-auto'>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </div>

    </div>
  )
}

export default Browse