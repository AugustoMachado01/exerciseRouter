import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Photo.css";

interface Props {
  titulo: string;
  src: string;
  id: string;
}

interface EventProps {
  event: React.MouseEvent<HTMLDivElement, MouseEvent>;
}

export function PhotoItem({ titulo, src, ...rest }: Props) {
  const navigate = useNavigate();

  async function handleClick(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    const { id } = event.target;

    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${id}`
    );

    if (response.ok) {
      const json = await response.json();

      navigate(`/produtoitem/${id}`, { state: { productData: json } });
    }
  }

  return (
    <div className="content" onClick={handleClick}>
      <img src={src} alt={titulo} {...rest} />
    </div>
  );
}
