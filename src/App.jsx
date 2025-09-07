import { BrowserRouter, Route, Routes } from "react-router-dom"
import DefaultLayout from "../layout/DefaultLayout"
import HomeSbeam from "../pages/HomeSbeam"
import DetailVideogame from "../pages/DetailVideogame"
import { useState } from "react"
import LoaderContext from "../context/LoaderContext"

function App() {

  const [isLoading, setIsLoading] = useState(false)


  return (
    <>
      <LoaderContext.Provider value={{ isLoading, setIsLoading }}>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path="/" element={<HomeSbeam />} />
              <Route path="/videogames/:id" element={<DetailVideogame />} />


            </Route>
          </Routes>
        </BrowserRouter>
      </LoaderContext.Provider>
    </>
  )
}

export default App
