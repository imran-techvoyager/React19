import ComponentA from "./components/ComponentA"
import { createContext } from "react";

export const context = createContext<string>("");
export const context1 = createContext<number>(0);

function App() {
  const name: string = "imran";
  const age: number = 23;

  return (
   <div>
    <context.Provider value={name}>
      <context1.Provider value={age}>
         <ComponentA />
      </context1.Provider>
    </context.Provider>
   </div>
  )
}

export default App
