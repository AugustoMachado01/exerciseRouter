import React from "react";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div>
      <Link to="/">Produtos</Link> | <Link to="contact">Contacto</Link>
    </div>
  );
}
