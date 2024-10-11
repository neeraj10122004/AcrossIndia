import React from 'react'

export const BasicCard = ({Img,Name,Description}) => {
  return (
    <div>
        <div className=''>
            <img src={Img} alt="Image" />
        </div>
        <div className=''>
            {Name}
        </div>
        <div className=''>
            {Description}
        </div>
    </div>
  )
}
