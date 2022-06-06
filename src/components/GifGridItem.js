import React from 'react';



export const GifGridItem = ( props ) => {//Recibo la imagen mediante el props

    //console.log(props.img);

    //accedo al title y a la url con props.NOMBRE
  return (
    <div className='card'>
        <img src={props.url} alt={props.title}/>
        <p>{props.title}</p>
    </div>
  )
}
