import React, { useState } from 'react'
import Button from '../Components/Elements/Buttons/Button';
import Display from '../Fragments/Display';

const Calculator = () => {
    const [result, setResult] = useState('')
    const [count, setCount] = useState('')
    
    const isOperator = (char) => {
      const operators = ['+', '-', '*', '/', '%'];
      return operators.includes(char);
    }

    const handleCount = (e) =>{
        const inputValue = e.currentTarget.value;
        
        // Periksa apakah hasilnya kosong dan input saat ini adalah tanda minus
      if (!result && inputValue === '-') {
        setResult(result.concat(inputValue));
        return;
      }
    
      // Cek apakah karakter sebelumnya adalah operator
      const lastCharIsOperator = isOperator(result.slice(-1));
    
      // Cek apakah karakter yang baru dimasukkan adalah operator
      const currentCharIsOperator = isOperator(inputValue);
      if (!result && currentCharIsOperator) {
        // Jangan lakukan apa pun jika result kosong dan inputValue adalah operator
        return;
      }
    
      // Hanya tambahkan operator jika karakter sebelumnya bukan operator
      // atau jika karakter yang baru dimasukkan bukan operator
      if (!lastCharIsOperator || !currentCharIsOperator) {
        setResult(result.concat(inputValue));
      }
        
      }
    
      // handle untuk menghapus semua nilai
    const handleClear = () =>{
        setResult('')
        setCount('')
      }

    // handle untuk mendelete nilai 
    const handleDelete = () => {
        setResult(result.slice(0,-1))
    }

    // Handle untuk menjumlahkan
    const hanldeCalculet = () => {
        try {
          const calculatedResult = eval(result);
          if (!isNaN(calculatedResult)) {
            setCount(calculatedResult.toString());
          } else {
            setResult('Invalid expression');
          }
        } catch (error) {
          setResult('Invalid expression');
        }
      }


  return (
    <div className='w-full min-h-screen flex items-center justify-center bg-slate-800 text-2xl '>
        <div className='bg-slate-600 w-fit text-right p-5 border rounded-xl box-border text-white'>
          <Display result={result} count={count}/>
          <Button
          handleCount={handleCount}
          handleClear={handleClear}
          handleDelete={handleDelete}
          hanldeCalculet={hanldeCalculet}
          />
        </div>
      </div>
  )
}

/* Jika responsife tidak sesuai bisa di tambahkan ini */
 // text-xl
/* p-3 */
export default Calculator