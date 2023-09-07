import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import './App.css';


import Main from './components/main';
import Header from './components/header';
import Nav from './components/nav';
import Footer from './components/footer';
import PagConvertidor from "./routes/pag-convertidor";
import { Children } from "react";
import Transactions from "./components/transactions";

const router = createBrowserRouter ({
  {
    path: "/",
    element: <Main />
    children=[
      {
        path: "transacitions"
        element: <Transactions />
      }
      {
        path: "page-convertidor"
        element: <PagConvertidor />
      }

      // ACA AÑADÍ TODAS LAS RUTAS NUEVAS COMO HIJOS
      // POR AHORA SEGUIMOS ESA ESTRUCTURA DE PATH + ELEMENT NOMAS

    ]
  }
})

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Nav />
        <Main />
        <Footer />
      </header>
    </div>
  );
}

export default App;
