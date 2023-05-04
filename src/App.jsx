import { useState } from 'react';
import React from 'react'
import FormList from './FormList';
import { nanoid } from 'nanoid';
import List from './List'

// const getLocalStorage=()=>{
//   let list=localStorage.getItem('list');
//   if(list){
//     list=JSON.parse(localStorage.getItem('list'))
//   }else{
//     list=[];
//   }
//   return list;
//   }


//varianta scurta:
const defaultList=JSON.parse(localStorage.getItem('list')||'[]')

const setLocalStorage=(items)=>{
  localStorage.setItem('list',JSON.stringify(items))
}




const App = () => {
  
  const[items,setItems]=useState(defaultList);


  const addItem=(itemName)=>{
    const newItem={
      name: itemName,
      completed: false,
      id:nanoid()
    }
    const newItems = [...items, newItem];
    setItems(newItems);
    setLocalStorage(newItems);
  }
  
  const removeItem=(itemId)=>{
    const newItems=items.filter((item)=>item.id!==itemId)
    setItems(newItems);
    setLocalStorage(newItems);
      
  }

  const editItem=(itemId)=>{
    const newItems=items.map((item)=>{
      if(item.id===itemId){
        const newItem={...item, completed:!item.completed}
        return newItem;
      }
      return item
    })
    setItems(newItems);
    setLocalStorage(newItems);
  }

  return (
    <article className='section-center'>
      <FormList addItem={addItem}/>
      <List items={items} removeItem={removeItem} editItem={editItem}/>
    </article>
  )
}

export default App