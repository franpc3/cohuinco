import React, { useState } from 'react';
import Login from './Login'; 
import Dashboard from './Dashboard';


export default function Admin() {
     const [login, setLogin] = useState(false); 
    return (
        <div>
             <Dashboard />
        {/* {login ? : <Login setLogin={setLogin} />}  */}
        </div>
    )
}
