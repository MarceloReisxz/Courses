import React from "react";
import { Routes, Route } from "react-router-dom";

import Hexa from "../components/hexa/Hexa";
import Penta from "../components/penta/Penta";
import Home from "../components/home/Home";

const Navegacao = props =>
    <Routes>
        <Route path='/hexa' element={<Hexa />} />
        <Route path='/penta' element={<Penta />} />
        <Route path='*' element={<Home />} />
    </Routes>

export default Navegacao



