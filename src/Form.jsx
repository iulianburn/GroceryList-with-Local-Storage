import React, { useState } from 'react'

const Form = () => {
    const [newItem,setNewItem]=useState('')
  return (
    <form >
        <h4>grocery bud</h4>
        <div className='form-control'>
        <input type='text' className='form-input' value={newItem}
            onChange={(e)=>setNewItem(e.target.value)}
        />
        <button type='submit' className='btn'>add item</button>

        </div>
    </form>
  )
}

export default Form