import React from 'react';
import './header.css'

const Header = () => {



    return (
        <div className="headerContent">
          <div className="headerTitle">
               <h1> Contact Maneger</h1>
               <p className="headerText"> <strong>Cria</strong>, <strong>Guarda</strong> e faça <strong>Busca</strong> dos seus <strong>contactos</strong> de forma segura!</p>
          </div>
          <div className="menuBar">
              <nav>
                   <ul className="menuList">
                        <li>
                        <a href="/addcontact"> Adicionar contatos </a>
                        </li>
                        <li>
                        <a href="/"> Listar contatos </a>
                        </li>
                   </ul>
              </nav>
          </div>

        </div>
    );
}

export default Header;
