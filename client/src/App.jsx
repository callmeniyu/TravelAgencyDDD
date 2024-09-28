import React, { Suspense } from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
const Home = React.lazy(() => import("./pages/Home/Home"));
import PropagateLoader from "react-spinners/PropagateLoader"

function App() {
  return (
      <BrowserRouter>
        <Routes>
        <Route 
          path="/" 
          element={
            <Suspense fallback={
              <div className="loader-container">
                <PropagateLoader data-testid="loader" color="#f1693b" className="loader" />
              </div>
            }>
              <Home />
            </Suspense>
          } 
        />
        </Routes>
      </BrowserRouter>
  )
}

export default App
