import React from "react";
import { useLocation } from "react-router-dom";
import { Head } from "./components/Head";

export function ProductItem() {
  const location = useLocation();
  const productData = location.state.productData;

  return (
    <div>
      <Head title={productData.nome} />

      {productData.fotos.map(({ titulo, src }) => (
        <div key={titulo} className="containerPhoto">
          <img src={src} alt={titulo} />
          <div>
            <h3>{productData.nome}</h3>
            <p>{productData.preco}</p>
            <p>{productData.descricao}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
