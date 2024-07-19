import Link from 'next/link'
import React from 'react'

const Option = ({name, link}: {name: string, link: string}) => {
  return (
    <div className=' p-2 hover:cursor-pointer select-none hover:underline underline-offset-8'>
        <Link
        href={link}>
        {name}
        </Link>
    </div>
  )
}

export default Option