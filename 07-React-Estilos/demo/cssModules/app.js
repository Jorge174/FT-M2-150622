import React from 'react';
import { render } from 'react-dom';
import Producto from './src/components/Product.jsx';
import OtroProducto from './src/components/OtroProduct.jsx'
import './src/global.gcss';

render(
    <div>
        <Producto title="Prueba" price={400}/>
        <OtroProducto title="Prueba" price={600}/>
    </div>

, document.getElementById('app'));
