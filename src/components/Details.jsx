import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

export default function Details() {
  let [pokemon, setPokemon] = useState("Pikachu");
  const matchParams = useParams();
  const fetchPokemon = async (id) => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${matchParams.pokemonId}/`
    );
    if (response.statusText === "OK") {
      const data = await response.json();
      console.log(data);
      setPokemon(data);
    } else {
      alert("couldn't load pokemon");
    }
  };

  return (
    <div>
      <h1></h1>
    </div>
  );
}
