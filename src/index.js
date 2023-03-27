import React from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Nav from "./components/Navbar/Nav.jsx"
import Home from "./pages/Home/Home.jsx"
import About from "./pages/About/About.jsx"
import Footer from "./components/Footer/Footer"
import Error404 from "./pages/404Error/Error.jsx"
import Accomodation from "./pages/Accomodation/Accomodation.jsx"
import { Lodging } from "./datas/lodging.js"

const rootElement = document.getElementById("root")
const root = createRoot(rootElement)

root.render(
  <BrowserRouter>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/*" element={<Error404 />}></Route>
      <Route
        path="/accomodation/:id"
        element={<Accomodation />}
        data={Lodging}
      ></Route>
    </Routes>
    <Footer />
  </BrowserRouter>
)
