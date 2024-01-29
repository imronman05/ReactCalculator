import React from 'react'
import { FaDeleteLeft } from "react-icons/fa6";

const Button = (props) => {
    const {handleClear,handleDelete, handleCount, hanldeCalculet} = props
  return (
    <div className='grid grid-cols-4 gap-4'>
    <button onClick={handleClear} value='C' className='Button-Operators'  >C</button>
    <button onClick={handleCount} value='%' className='Button-Operators'  >%</button>
    <button onClick={handleDelete} className='Button-Operators'  ><FaDeleteLeft /></button>
    <button onClick={handleCount} value='/' className='Button-Operators'  >/</button>
  
    <button onClick={handleCount} value='7' className='Button-Number'  >7</button>
    <button onClick={handleCount} value='8' className='Button-Number'  >8</button>
    <button onClick={handleCount} value='9' className='Button-Number'  >9</button>
    <button onClick={handleCount} value='*' className='Button-Operators'  >*</button>
 
    <button onClick={handleCount} value='4' className='Button-Number'  >4</button>
    <button onClick={handleCount} value='5' className='Button-Number'  >5</button>
    <button onClick={handleCount} value='6' className='Button-Number'  >6</button>
    <button onClick={handleCount} value='-' className='Button-Operators'  >-</button>
 
    <button onClick={handleCount} value='1' className='Button-Number'  >1</button>
    <button onClick={handleCount} value='2' className='Button-Number'  >2</button>
    <button onClick={handleCount} value='3' className='Button-Number'  >3</button>
    <button onClick={handleCount} value='+' className='Button-Operators'  >+</button>
 
    <button onClick={handleCount} value='00' className='Button-Number'  >00</button>
    <button onClick={handleCount} value='0' className='Button-Number'  >0</button>
    <button onClick={handleCount} value=',' className='Button-Number'  >,</button>
    <button onClick={hanldeCalculet} value='=' className='Button-Equal'  >=</button>
 
  </div>
  )
}

/* Jika responsife tidak sesuai bisa di tambahkan ini */
// gap-3 md:
export default Button