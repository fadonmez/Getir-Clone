import React, { useState, useEffect } from "react";
import cardsData from "../api/cards.json";
import Card from "../components/ui/Card.jsx";

export default function Cards() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    setCards(cardsData);
  }, []);

  return (
    <div className="py-4 px-4">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {cards && cards.map((card, index) => <Card key={index} card={card} />)}
      </div>
    </div>
  );
}
