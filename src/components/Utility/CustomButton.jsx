import React from 'react'

const CustomButton = ({ id = 'custom_btn', text = 'Button', rigthIcon, leftIcon, containerClass, ...props }) => {
    return (
        <button
            id={id}
            className={`px-[1rem] py-[.5rem] group flex justify-center items-center gap-2 relative cursor-pointer rounded-full overflow-hidden z-10 bg-violet-100 text-gray-800 ${containerClass && containerClass} `}
        >
            <div className="rightIcon text-2xl">
                {rigthIcon && rigthIcon}
            </div>
            {text}
            <div className="rightIcon">
                {leftIcon && leftIcon}
            </div>
        </button>
    )
}

export default CustomButton