import React, { useState } from 'react'

const FormList = ({addItem}) => {
    const [newItem,setNewItem]=useState('')

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!newItem){return;}
        addItem(newItem);
        setNewItem('');
       
    }

  return (
    <form onSubmit={handleSubmit}>
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

export default FormList