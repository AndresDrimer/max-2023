import React from 'react'

export type ButtonProps={
    title: string;
    href: string;
}
function ButtonCallToAction({title, href}: ButtonProps) {
  return (
    <button className='bg-celesteMax border-[1px] border-celesteMax px-4 py-2  rounded-lg mt-4 text-zinc-100 hover:bg-celesteOscuro hover:border-black active:grayscale'><a href={href}>{title}</a></button>
  )
}

export default ButtonCallToAction