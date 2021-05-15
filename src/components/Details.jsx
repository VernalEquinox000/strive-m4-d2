import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

export default function Details() {
  let [pokemon, setPokemon] = useState("Pikachu");

  const fetchPokemon = async (id) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    if (response.statusText === "OK") {
      const data = await response.data;
      console.log(data);
      setPokemon(data);
    } else {
      alert("couldn't load user");
    }
  };

  return <div></div>;
}
