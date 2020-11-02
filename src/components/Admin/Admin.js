import React, { useState } from 'react';
import Dashboard from './Dashboard';
//import Login from './Login';

export default function Admin() {
    //const [login, setLogin] = useState(false); 
    return (
        <div>
             <Dashboard />
        {/* {login ? : <Login setLogin={setLogin} />}  */}
        </div>
    );
}