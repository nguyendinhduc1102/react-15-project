import React from 'react'

const Menu = ({items}) => {
    
    return (
        <div className='section-center'>
            {items.map((menuItem)=>{
                const {id,title,img,price,desc} = menuItem
                return 
            })}
        </div>
    )
}

export default Menu
