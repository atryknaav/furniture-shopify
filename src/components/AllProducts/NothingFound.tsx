import React from 'react'
import { TfiFaceSad } from 'react-icons/tfi'

const NothingFound = () => {
  return (
    <div className=' w-screen h-screen flex items-center text-center justify-center m-auto text-gray-400 flex-col text-4xl font-light gap-6'>
        <p>
            Nothing found for this search!
        </p>
        <TfiFaceSad className=' '/>
        <p>
            Try changing the criteria 
        </p>
        
    </div>
  )
}

export default NothingFound