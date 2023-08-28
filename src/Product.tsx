import React from "react";
import { Route, Routes } from "react-router-dom";
import { ProductItem } from "./ProductItem";
import { PhotoItem } from "./components";
import "./Styles.css";

interface PhotoItemProps {
  titulo: string;
  src: string;
}

interface DataItemProps {
  id: string;
  fotos: PhotoItemProps[];
  nome: string;
  preco: string;
  usuario_id: string;
  descricao: string;
  vendido: string;
}

export function Product() {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState<DataItemProps[]>();

  async function isLoadinng() {
    const response = await fetch(
      "https://ranekapi.origamid.dev/json/api/produto"
    );

    if (response.ok) {
      const json = await response.json();

      setData(json);

      setLoading(false);
    }
  }

  React.useEffect(() => {
    isLoadinng();
  }, []);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Processando...
      </div>
    );
  }

  return (
    <div className="container">
      {data &&
        data.map((item) => (
          <div key={item.id}>
            {item.nome}
            {item.fotos.map((foto) => (
              <PhotoItem
                key={foto.titulo}
                titulo={foto.titulo}
                src={foto.src}
                id={item.nome}
              />
            ))}
          </div>
        ))}
    </div>
  );
}
