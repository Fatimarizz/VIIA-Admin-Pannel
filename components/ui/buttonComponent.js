import React from 'react'

export default function Button({ buttonClass, onClick, label }) {
    return (
        <div> <button
            className={` ${buttonClass} text-white bg-primary-500 w-full py-2 rounded-lg font-[500] hover:bg-green-600 cursor-pointer duration-300 ease-in-out`}
            onClick={onClick}
        >
            {label}
        </button></div>
    )
}
