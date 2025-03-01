import CalendlyEmbed from '@/components/CalendlyEmbed'
import React from 'react'

const calendly = () => {
    return (
        <div className="my-8 items-center">
            <h1 className='text-gray-800 text-center font-bold text-lg w-full flex justify-center mb-2'>Schedule an Appointment</h1>
                <CalendlyEmbed url="https://calendly.com/rocioanriquez23/example-1" />
        </div>
    )
}

export default calendly