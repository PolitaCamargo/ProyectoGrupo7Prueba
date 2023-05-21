import Card from "./Cards";
import tarjetasData from "./tarjetasData.json";
import "./SeccionTarjetas.css";

function SeccionTarjetas() {
  const numColumns = 4;
  const numCards = 12;

  // Obtener n tarjetas aleatorias de los datos
  const getRandomCards = (n) => {
    const shuffledCards = tarjetasData.sort(() => 0.5 - Math.random());
    return shuffledCards.slice(0, n);
  };

  // Generar las tarjetas aleatorias
  const cards = getRandomCards(numCards);

  // Dividir las tarjetas en columnas
  const columns = [];
  for (let i = 0; i < numColumns; i++) {
    const startIndex = i * (numCards / numColumns);
    const endIndex = startIndex + numCards / numColumns;
    const column = (
      <div key={i} className="column">
        {cards.slice(startIndex, endIndex).map((card) => (
          <Card
            key={card.id}
            id={card.id}
            imageSrc={card.imageSrc}
            description={card.description}
            price={card.price}
          />
        ))}
      </div>
    );
    columns.push(column);
  }

  return (
    <section>
      <div className="card-columns">{columns}</div>
    </section>
  );
}

export default SeccionTarjetas;
