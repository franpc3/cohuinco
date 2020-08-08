import React, { useState } from 'react';
/* import Login from './Login'; */
import Dashboard from './Dashboard';


export default function Admin() {
     const [login, setLogin] = useState(false); 
    return (
        <div>
            <h3 className="text-center mt-3">Administra los turnos </h3>
            <Dashboard />
           {/*  {login ? <Dashboard /> : <Login setLogin={setLogin} />} */}
           
        </div>
    )
}
