'use client'
import React, { useState } from 'react'

const Contador = () => {
  const [counter, setCounter] = useState(0)

  const restarCounter = () => {
    setCounter(counter - 1)
  }

  const sumarCounter = () => {
    setCounter(counter + 1)
  }

  return (
    <div>
      <p className='m-6 font-bold text-lg'>PRACTICA DE HOOK USESTATE DE REACT</p>
      <div className='flex justify-center'>
      <button className='text-md border border-purple-800 p-4' onClick={restarCounter}>restar</button>
      <div className='p-6 text-cyan-800 font-semibold text-lg'>{counter}</div>
      <button className='text-md border border-purple-800 p-4' onClick={sumarCounter}>sumar</button>
      </div>
    </div>
  )
}

export default Contador