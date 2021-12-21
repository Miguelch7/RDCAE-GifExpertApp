import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ({ defaultCategory = [] }) => {

    const [categories, setCategories] = useState( defaultCategory );

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory
                setCategories={ setCategories }
            />
            <hr />

            <ol>
                { categories.length === 0 ? ( <p>No hay resultados, realiza una búsqueda</p> ) : (
                    categories.map( category => (
                        <GifGrid
                            category={ category }
                            key={ category }
                        >{ category }</GifGrid>
                    ))
                )
                }
            </ol>
        </>
    )
}
