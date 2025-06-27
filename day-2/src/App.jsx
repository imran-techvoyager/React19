import React from 'react'
import ComponentA from './propdrill/ComponentA'
import { createContext } from 'react';
import { UserProvider } from './context/UserContext';
import UserProfile from './context/UserProfile';
import UserUpdate from './context/UserUpdate';
import Reference from './ref/Reference';

export const context = createContext();
export const context1 = createContext();

const App = () => {
  const name = "imran";
  const age = 23;

  return (
    // <context.Provider value={name}>
    //   <context1.Provider value={age}>
    //     <ComponentA />
    //   </context1.Provider>
    // </context.Provider>
    // <UserProvider>
    //   <UserProfile />
    //   <UserUpdate />
    // </UserProvider>
    <div>
      <Reference />
    </div>
  )
}

export default App