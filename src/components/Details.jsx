import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Details() {
  let [pokemon, setPokemon] = useState(1);
  const matchParams = useParams();
  const fetchPokemon = async (id) => {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${id}/`
    );

    //const data = await response.json();
    const data = await response.data;
    console.log(data);
    //if (response.statusText === "OK") {

    setPokemon(data);
    /* } else {
      alert("couldn't load pokemon");
    } */
  };

  useEffect(() => {
    fetchPokemon(matchParams.pokemonId);
  });

  return (
    <div>
      <p>{pokemon.name}</p>
    </div>
  );
}
