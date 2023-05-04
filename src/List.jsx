import React from 'react'
import SingleItem from './SingleItem'

const List = ({items, removeItem, editItem}) => {
  return (
    <div className='items'>
        {items.map((item)=>{
            return <SingleItem key={item.id} item={item} editItem={editItem} removeItem={removeItem}/>
        })}
    </div>
  )
}

export default List