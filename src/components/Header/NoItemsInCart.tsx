import React from 'react'
import { TfiFaceSmile } from 'react-icons/tfi'

const NoItemsInCart = () => {
  return (
    <div className=' h-full flex items-center m-auto text-zinc-500 font-light flex-col justify-center gap-6'>
        <div className=' text-center'>    
            You haven't added any items to the cart yet!
        </div>

        <div>
            <TfiFaceSmile className=' text-6xl'/>
        </div>
    </div>
  )
}

export default NoItemsInCart