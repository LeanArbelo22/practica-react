import React, {useState} from 'react';
import { PropTypes } from 'prop-types';

function AgregarProducto ({setCategorias}) {
    
const [input, setInput] = useState('Ingrese un nuevo producto');
    
const handleChange = (e) => {
    setInput(e.target.value); //event.target
    //console.log(input);
}

const handleSubmit = (e) => {
    e.preventDefault();
    
    if(input.trim().length >= 2){ /* trim no necesario */
    setCategorias(cat => [...cat, input]);
    console.log(input);
    setInput('')
    }
}

    return (
        <div>
            <hr />
        <h3>Agregar Categorias</h3>
            
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            value={input}
            onChange={handleChange}
            />
            <button 
            onClick={handleSubmit}
            type="button" 
            className="btn btn-secondary">Agregar</button>
        </form>

        </div>
    )
};

AgregarProducto.propTypes = {
    setCategorias: PropTypes.func.isRequired
}

export default AgregarProducto;