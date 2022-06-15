import React from "react";
import { render } from "react-dom";
import Producto from "./src/components/Product.jsx";
import OtroProduct from "./src/components/otroProduct.jsx";

render(
  <div>
    <Producto title="Prueba" price={400} />
    <OtroProduct title="Prueba" price={400} />
  </div>
  , document.getElementById("app"));
