import { BrowserRouter, Route, Routes } from "react-router-dom"
import DefaultLayout from "../layout/DefaultLayout"
import HomeSbeam from "../pages/HomeSbeam"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomeSbeam />} />


          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
