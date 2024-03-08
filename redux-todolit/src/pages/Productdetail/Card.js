import React from 'react';


 const Card = ({items}) => {
    return(
        <>
        <div className='card-cont'>
            <div className='p-5 flex flex-col hover:scale-110 transition-all ease-out '>
                <div className='rounded-xl overflow-hidden'>
            <img src={items.img} />
            <p>{items.color}</p>
            <p>{items.size}</p>
            <p>{items.price}</p>
            <p>{items.itembrand}</p>
            </div>
            </div>
        </div>
        </>
    )
}

export default Card;