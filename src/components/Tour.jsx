import React, { useState, useEffect } from 'react';

const Tour = ({ id, name, info, image, price }) => {
    const [readMore, setReadMore] = useState(false)
    const handlerDelete = (id) => {
        filteredDelete
    }
    return (
        <article className='single-tour'>
            <img src={image} alt={name} />
            <footer>
                <div className='tour-info'>
                    <h4>{name}</h4>
                    <h4 className='tour-price'>${price}</h4>
                </div>
                <p>
                    {
                        readMore ? info : `${info.substring(0, 150)}`
                    }
                         <button onClick={() => setReadMore(!readMore)}>{readMore ? 'show less' : 'read more'}</button>
                </p>
                <button className='btn' onClick={() => handlerDelete(id)}>Delete</button>
            </footer>
        </article>
    )
}
export default Tour