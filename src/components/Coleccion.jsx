import React, { useState, useEffect } from 'react';
import Card from './Card';

const Coleccion = () => {

    const [datos, setDatos] = useState([]);
    useEffect(()=>{
        peticion()
    }, [])


    const peticion = async () => {
    const URL = 'https://api.giphy.com/v1/gifs/trending?q=Goku&limit=10&api_key=XfTrLeRLQnMp091kQoOLQXHzHrMs0Cb2';

    const respuesta = await fetch(URL);
    const {data} = await respuesta.json();
    const image = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    console.log(image);
    setDatos(image);
    }

    return(

        <div>
            <h3>Coleccion gifs API</h3>
            <ol>
                {
                    datos.map(({id, title, url}) => {
                        return <li 
                        key={id}>{title}
                        {/* <img 
                        className="gifs"
                        src={url}
                        alt={title}
                        /> */}
                    </li> 
                    })
                }
            </ol>
            <hr />
            
            {
                datos.map(({id, title, url}) => {
                    return <Card
                    key= {id}
                    title= {title}
                    url= {url}
                    />
                })
            }
            <Card />
        </div>
    )


}

export default Coleccion;