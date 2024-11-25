import React from 'react'

const CustomButton = ({ id = 'custom_btn', text = 'Button', rigthIcon, leftIcon, containerClass, ...props }) => {
    return (
        <button
            id={id}
            className={`px-7 py-3 group relative cursor-pointer rounded-full overflow-hidden z-10 bg-violet-100 text-black ${containerClass && containerClass} `}
        >
            {rigthIcon && rigthIcon}
            {text}
            {leftIcon && leftIcon}
        </button>
    )
}

export default CustomButton