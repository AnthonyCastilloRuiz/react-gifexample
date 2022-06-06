import React, {useState} from 'react';
import PropTypes from 'prop-types';

//Ahora recibo el useState del padre
export const AddCategory = ({setcategories}) => {

  const [inputValue, setInputValue] = useState();
  
  const handleInputChange = (e) => {
      setInputValue(e.target.value);
  }

  const handleSubmit = (e) =>{
      e.preventDefault(); 

      if(inputValue.trim().length > 2) {
          //Accedo al array del useState y añado el nuevo valor del input
        setcategories(categorias => [inputValue,...categorias]);
        setInputValue('');
      };
  }
  
  return (
    <>
    <form onSubmit={handleSubmit}>
        <input
            type="text"
            value={inputValue} //Asigno el hook al input 
            onChange={ handleInputChange} // cada vez que escriba o borra saltara la funcion
        />
    </form>

    </>
  )
}

AddCategory.prototype = {
    setcategories: PropTypes.func.isRequired
}
