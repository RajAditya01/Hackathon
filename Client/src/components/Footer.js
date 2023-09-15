import React from 'react'

function Footer() {
    return (
        <div className='flex flex-col bg-blue-900  text-white text-center py-4'>
            <div className='flex justify-center space-x-4 mt-auto'>
                <p className="hover:text-blue-500 cursor-pointer">Service</p>
                <p className="hover:text-blue-500 cursor-pointer">About Us</p>
                <p className="hover:text-blue-500 cursor-pointer">Contact Us</p>
            </div>
        </div>
    )
}

export default Footer