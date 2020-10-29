import React from 'react'
import { Link } from 'react-router-dom'

const Cocktails = ({image,name,id,info,glass}) => {
    return (
        <article className='cocktail'>
            <div className='img-container'>
                <img src={image} alt={name}/>
            </div>
            <div className='cocktail-footer'>
                <h3>{name}</h3>
                <h>{glass}</h>
                <p>{info}</p>
                <Link to={`/cocktail/${id}`} className='btn btn-primary'>
                    detail
                </Link>
            </div>
        </article>
    )
}

export default Cocktails