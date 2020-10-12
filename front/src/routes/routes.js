import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

//Importar as páginas
import Login from '../pages/Login/Login';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={Login} />
            </Switch>        
        </BrowserRouter>
    );
};

export default Routes;