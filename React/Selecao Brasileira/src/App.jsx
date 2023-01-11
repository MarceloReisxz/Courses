
import React from "react";
import { BrowserRouter } from 'react-router-dom'

import Navegacao from './routes/Routes';


function App() {
  return (
    <BrowserRouter>
      <div>
        <Navegacao></Navegacao>
      </div>
    </BrowserRouter>
  );
}

export default App;
