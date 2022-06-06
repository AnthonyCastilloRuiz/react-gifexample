import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid'; 


export const GifExpertApp = () => {


    const [categories, setcategories] = useState(['One punch']);
     
    // const handleAdd = () => {
    //     //Con los ... cogemos el valor previo de categories y le añadimos el nuevo
    //      setcategories([...categories,'Hunter X Hunter']);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setcategories={setcategories}></AddCategory>
            <hr></hr>
{/* 
            <button onClick={handleAdd}>AGREGAR</button> */}
            <ol>
                {
                    categories.map( category => {
                        return (
                            <GifGrid 
                            key={category}
                            category={category}
                            />
                        )
                    }

                    )
                }
            </ol>
        </>
    )
}
