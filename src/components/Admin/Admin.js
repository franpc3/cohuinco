import React, { useState } from 'react';
import Login from './Login'; 
import Dashboard from './Dashboard';


export default function Admin() {
     const [login, setLogin] = useState(false); 
    return (
        <div>
             {login ? <Dashboard /> : <Login setLogin={setLogin} />} 
        </div>
    )
}
