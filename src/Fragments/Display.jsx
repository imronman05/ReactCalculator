import React from 'react'

const Display = (props) => {
    const {result, count} = props
  return (
    <div className='h-24 flex flex-col justify-end mb-2'>      
        <h1 className='font-semibold text-3xl '>{result}</h1>       
        <span className={`text-xl text-slat ${count ? 'undefined': 'inline-block'}`}>{count}</span>
    </div>
  )
}

/* Jika responsife tidak sesuai bisa di tambahkan ini */
// h-16 md:
/* text-2xl md: */
/* text-xl md: */
export default Display