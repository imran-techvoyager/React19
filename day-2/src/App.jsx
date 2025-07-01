import React from 'react'
import ComponentA from './propdrill/ComponentA'
import { createContext } from 'react';
import { UserProvider } from './context/UserContext';
import UserProfile from './context/UserProfile';
import UserUpdate from './context/UserUpdate';
import Reference from './ref/Reference';
import Timer from './timer/Timer';
import useFetch from './custom/useFetch';
import Todo from './projects/todo/Todo';
import Meal from './projects/meals/Meal';
import Calculator from './projects/calculator/Calculator';
import Accordion from './projects/accordion/Accordion';
import { accordionData } from './projects/accordion/utils/content';

export const context = createContext();
export const context1 = createContext();

const App = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos")
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
      {/* <Reference /> */}
      {/* <Timer /> */}
      {/* {data && data.map((item) => (
         <h1 key={item.id}>{item.title}</h1>
      ))} */}
      {/* <Todo /> */}
      {/* <Meal /> */}
      {/* <Calculator /> */}
      <div>
        {accordionData.map(({title, content}) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  )
}

export default App