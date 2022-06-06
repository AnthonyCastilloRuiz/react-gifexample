import React from 'react'
import { GifGridItem } from './GifGridItem';
import { getGifs} from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';


export const GifGrid= ({category}) => {

    // const [images, setImages] = useState([]);

    // useEffect(()=> {
    //     getGifs( category).then(img => setImages(img)); //llamamos a la funcion
    // },[ category ]) //si la categoria cambia volvemos a cargar ese pedazo

    const {data:images, loading} = useFetchGifs( category);
    console.log(loading);


  return (
    <>
        <h3>{category}</h3>
        
        <div className='card-grid'>
                {
                    images.map( (img) => (
                        <GifGridItem 
                            key={img.id}
                            {...img}
                        />
                    ))               
                }
        </div>


    </>
  )
}
