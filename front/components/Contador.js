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
      <h2 className='m-4 font-bold text-lg'>PRACTICA DE HOOK USESTATE DE REACT</h2>
      <h3>Es una función especial para crear variables con estado. Ésta se actualiza y cambia el estado inicial.</h3>
      <div className='flex justify-center'>
      <button className='text-base border-2 border-purple-800 px-2 py-2 rounded-md font-semibold hover:bg-purple-100 transition' onClick={restarCounter}>- RESTAR</button>
      <div className='p-6 text-pink-700 font-semibold text-2xl mx-5'>{counter}</div>
      <button className='text-base border-2 border-purple-800 px-2 py-2 rounded-md font-semibold hover:bg-purple-100 transition' onClick={sumarCounter}>+ SUMAR</button>
      </div>
    </div>
  )
}

export default Contador