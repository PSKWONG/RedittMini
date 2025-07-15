////////////////////////////Importing//////////////////////

//------------------------Import External Componenet ----------------------
import React from 'react';
//------------------------Import Internal Componenet ----------------------
import { HeaderComponent } from '../header/header';
import { Outlet } from 'react-router-dom';

export function Root() {
    return (
        <div className="App">
            <HeaderComponent />
            <Outlet />  
        </div>
    )
}
