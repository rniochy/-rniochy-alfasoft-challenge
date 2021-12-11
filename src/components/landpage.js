import React, { useEffect, useState } from 'react';
import Contato  from './contato';

const Landpage = () => {
    const [contats, setContacts] = useState([])

    useEffect(()=>{}, [])

    const contato = [{
         name: "Rodrigo lima",
    }]
    useEffect(()=>{
        setContacts(contato)
    }, [])
    return (
        <div className="land_container">  
            <div  className="land_card">
                {/* {
                     contats.map((contact, index) => {
                        <Contato />
                     })
                } */}
                <Contato/>
                <Contato/>

            </div>
        </div> 
    );
}

export default Landpage;
