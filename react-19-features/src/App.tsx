// import FetchData from "./components/FetchData"
import { Suspense } from "react"
import NewFetch from "./components/NewFetch"

function App() {

  return (
      <Suspense>
        {/* <FetchData /> */}
          <NewFetch />
      </Suspense>
  )
}

export default App
