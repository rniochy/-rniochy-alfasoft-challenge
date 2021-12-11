import React from 'react';
import './Contato.css'
const Contato = () => {

     const viewContact = ()=> {
           
     }

     const editContact = ()=>{

     }

     const deleteContact = () =>{

     }
    return (
        <div className="contato_container">
               <div className="contacto_body">
                    <div className="contato_item"> 
                         <ul>  
                              <li>Rodrigo </li>
                              <li>rniochy@gmail.com </li>
                              <li> <button onClick={viewContact}>Vizualizar</button> </li>
                              <li> <button onClick={editContact}>Editar</button> </li>
                              <li> <button onClick={deleteContact}>Eliminar</button> </li>
                         </ul> 
                    </div>              
               </div>
        </div>
    );
}

export default Contato;
