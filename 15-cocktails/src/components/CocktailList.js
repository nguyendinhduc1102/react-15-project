import React from 'react'
import { useGlobalContext } from '../context'
import Cocktails from './Cocktail'
import Loading from './Loading'

const CocktailList = () => {
    const {cocktails,loading}=useGlobalContext()
    if (loading) {
        return <Loading />
    }
    if (cocktails.length < 1) {
       return (<h2 className='section-title'>
            no cocktails matched your search 
        </h2>)
    }
    return (
        <section className='section'>
            <h2 className='section-title'>
                cocktails
            </h2>
            <div className='cocktails-center'>
                {cocktails.map((item)=>{
                    return <Cocktails key={item.id} {...item}/>
                })}
            </div>
        </section>
    )
}

export default CocktailList
