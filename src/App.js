import React from 'react';
import Header from './components/header';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Landpage from './components/landpage';
import Addcontact from './components/addcontact';


function App() {
  return ( 
    <>
    <Router>
    <Header/>
      <div className="container">
      <br/>
      <Route path="/" exact component={Landpage} />
      <Route path="/addcontact" component={Addcontact} />
      </div>
    </Router>
    </>
  );
}

export default App;
