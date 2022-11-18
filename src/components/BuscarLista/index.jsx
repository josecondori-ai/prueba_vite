import React from 'react';
import { useState } from 'react';
import lista from '../../assets/lista'

const BuscarLista = () => {
    const [shoppingList,setShoppingList]=useState(lista)

    //console.log(shoppingList)

    const mifuncion=(e)=>{
           
            const escribio=e.target.value
            console.log(escribio)

            const resultado= shoppingList.filter((item)=>item.titulo.toLowerCase().includes(escribio))
            setShoppingList(resultado)
    }

    return(
        <div className='container'>
            <h2>Buscar en la lista</h2>
            <input type="text" placeholder='Buscar por titulo' onChange={(e)=>mifuncion(e)}/>
            <ul>
                {shoppingList.map(({titulo,id})=><li key={id}>{titulo}
                <button>Eliminar</button>
                </li>)  }
            </ul>
        </div>
    )
}

export { BuscarLista }