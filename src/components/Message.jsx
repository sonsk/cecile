import React from 'react'

export default function Message() {
  return (
    <div className='w-11/12 md:w-4/12 mx-auto border rounded-xl border-[#FFD700]  mt-4 p-4'>
        <h1 className='text-left text-2xl font-bold text-[#FFD700] p-2'> Pour toi maman!</h1>
        <p className='text-gray-200 text-justify p-2 text-light'>Le roc, n'est pas aussi solide pour décrire ta force
          le nuage n'est pas aussi doux pour exprimer ton amour
          le soleil n'est pas assez lumineux pour le comparer à ton sourire
          je t'aime n'est pas assez vrai pour déclarer l'amour que j'ai pour toi
          maman, mater, reme, madré, rems, BONGA, LA MÈRE des NGUIDJOL,
          mè gwess wè ngane ma lam.
        </p>
        <div className='flex flex-row justify-between items-center text-[#FFD700] mt-4'>
            <div></div> 
            <div className='text-right'>
                <p className='font-light'>Avec tout mon amour,</p>
                <p className='font-bold'>Jacques Kevin</p>
            </div>
        </div>
    </div>


  )
}
