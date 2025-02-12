import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className="font-sans bg-gray-300 px-30 py-12 my-10 mx-20">
      <div className="grid lg:grid-cols-2 gap-12 lg:max-w-6xl max-w-2xl mx-auto">
        <div className="text-left">
          <h2 className="text-gray-800 text-3xl font-bold mb-6">NombreDeLaEmpresaONegocio</h2>
          <p className="mb-4 text-sm text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam, ipsum vel iaculis bibendum, justo turpis ullamcorper mauris, non aliquam nisi purus vel nisl. Integer efficitur turpis in bibendum tincidunt.</p>
          <p className="mb-4 text-sm text-gray-700">Nulla facilisi. Vestibulum fringilla leo et purus consectetur, vel tincidunt dolor rhoncus. In hac habitasse platea dictumst. Fusce vel sodales elit. Suspendisse potenti. Sed eget consequat nisi.</p>
          <p className="text-sm text-gray-700">consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula. nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
          <p className="text-sm text-gray-700">consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula. nunc et tempus blandit, metus mi consectetur felis turpis vitae ligula.</p>
        </div>
        <div>
          <Image src="/minimalista1.jpg" alt="image" className="rounded-lg object-contain" width={400} height={400}/>
        </div>
      </div>
    </div>
  )
}

export default About