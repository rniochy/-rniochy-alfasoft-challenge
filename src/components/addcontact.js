import React, { useState } from 'react';
import axios from 'axios'

import './addcontact.css'

const Addcontact = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [foto, setFoto] = useState()
    const [tel, setTel] = useState()

    const sendData = async (e) => {
        e.preventDefault()
        

        if((name && email && foto  && tel)){
            const {msg}=  await axios.post('http://localhost:5000/contato/register', {
                name,
                email, 
                tel,
                foto
             });

             console.log(msg)

        } else {
             console.log(`Os campos n devem estar todos vazios`)
        }
        
    }
    return (
        <>
            <form  method='POST' action="#" className='AddcontactContent'>

            <div className="content_corpo">
            <div className="contact_foto">
                <input type="file" onChange={(e)=>setFoto(e.target.value)}   id='foto'   name='foto'/>
             </div>

            <div className="contact_detail"> 
                <label htmlFor='name' >Nome</label>
                <input onChange={(e)=>setName(e.target.value)}   id='name'  type='text' name='name'/>
            
                <label htmlFor='email'>Email</label>
                <input onChange={(e)=>setEmail(e.target.value)}  id='email'  type='email' name='email'/>

                <label htmlFor='tel'>Telefone</label>
                <input  onChange={(e)=>setTel(e.target.value)}  id='tel'  type='tel' name='tel'/>
                <br/>    

                <button id= 'contato' onClick={sendData} > Adicionar contato </button>
            </div>
            </div>
            </form>
        </>
    );
}

export default Addcontact;
