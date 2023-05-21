import React from "react";
import Card from "./Card";
import "./SeccionTarjetas.css";

function SeccionTarjetas() {
  const numColumns = 4;
  const numCards = 12;
  const cards = [];

  // Generar un arreglo con números aleatorios únicos
  const randomIndexes = [];
  while (randomIndexes.length < numCards) {
    const randomIndex = Math.floor(Math.random() * numCards);
    if (!randomIndexes.includes(randomIndex)) {
      randomIndexes.push(randomIndex);
    }
  }

  // Generar las tarjetas usando los números aleatorios como índices
  for (let i = 0; i < numCards; i++) {
    const randomIndex = randomIndexes[i];
    const card = (
      <Card
        key={i}
        imageSrc={`imagen${randomIndex + 1}.jpg`}
        title={`Título de la Tarjeta ${randomIndex + 1}`}
        description={`Descripción de la Tarjeta ${randomIndex + 1}`}
      />
    );
    cards.push(card);
  }

  // Dividir las tarjetas en columnas
  const columns = [];
  for (let i = 0; i < numColumns; i++) {
    const startIndex = i * (numCards / numColumns);
    const endIndex = startIndex + numCards / numColumns;
    const column = <div key={i}>{cards.slice(startIndex, endIndex)}</div>;
    columns.push(column);
  }

  return (
    <section>
      <h2>Tarjetas Aleatorias</h2>
      <div className="card-columns">{columns}</div>
    </section>
  );
}

export default SeccionTarjetas;
