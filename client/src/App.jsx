import React, { Suspense } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
const Home = React.lazy(() => import("./pages/Home/Home"))
const Contact = React.lazy(() => import("./pages/Contact/Contact"))
const Packages = React.lazy(() => import("./pages/Packages/Packages"))
import PropagateLoader from "react-spinners/PropagateLoader"
import Error404 from "./pages/Error/Error404"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Suspense
                            fallback={
                                <div className="loader-container">
                                    <PropagateLoader data-testid="loader" color="#f1693b" className="loader" />
                                </div>
                            }
                        >
                            <Home />
                        </Suspense>
                    }
                />
                <Route
                    path="/packages"
                    element={
                        <Suspense
                            fallback={
                                <div className="loader-container">
                                    <PropagateLoader data-testid="loader" color="#f1693b" className="loader" />
                                </div>
                            }
                        >
                            <Packages />
                        </Suspense>
                    }
                />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
