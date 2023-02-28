import React from 'react'

type ButtonProps = {
    type: 'outline' | 'fill'
    text: string
}

export const Button = ({type, text}: ButtonProps) => {
    return (
        <button className={`${type === 'outline' ?  'border border-white' : 'text-black bg-white'} py-[7px] px-[34px] rounded-md`}>{text}</button>
    )
}