import React, { useState ,createContext} from 'react';

import { Person } from './components/Person';


interface AppContextInterface{
  name:string;
  age:number;
  city:string
}

const AppContext=createContext<AppContextInterface | null>(null);

const App=()=> {

    
  const values={
    name:"Saumitra",
    age:20,
    city:'Badlapur'
}


  return (

    <AppContext.Provider value={values}>
    <div className="App">
    <Person name='sau' age={23} email="sau@test.com"/>
    </div>
    </AppContext.Provider>

  );
}

export default App;
