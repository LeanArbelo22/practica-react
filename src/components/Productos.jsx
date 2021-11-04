import React, {useState} from 'react';
import AgregarProducto from './AgregarProducto';
import Coleccion from './Coleccion';

function Productos() {

    const [categorias, setCategorias] = useState(['Gaseosas', 'Galletas', 'Arroz', 'Azucar']);

    /* const handleAgregar = () => {
        //setCategorias( [...categorias, 'Cervezas']);
        setCategorias( ['Cervezas',...categorias]);
        //setCategorias(cat => [...cat, 'Harinas'])
    } */

    return(
        <>
        <h2>Productos</h2>
            <AgregarProducto 
                setCategorias={setCategorias}
            />
            
            <ol>
            {
                categorias.map(categoria =>{
                    return <li key={categoria}>{categoria}</li>
                })
            }
            </ol>           
            <hr />
            <Coleccion />
        </>
    )
}

export default Productos;