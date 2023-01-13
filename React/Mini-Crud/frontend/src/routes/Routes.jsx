import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "../form/App";
import Exclusao from "../form/Exclusao";
import Return from "../form/Return";

export default props =>
    <Routes>
        <Route exact path='/' element={<App />} />
        <Route path='/return' element={<Return />} />
        <Route path='/exclusao' element={<Exclusao />} />
        <Route path='*' element={<App />} />
    </Routes>