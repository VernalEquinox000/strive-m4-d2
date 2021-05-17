import React, { useState, useEffect } from "react";
import { Col, Form, FormControl, Button } from "react-bootstrap";

export default function Search({ objects }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchPokemon = () => {
    console.log("pokemons is" + objects);
    /* const results = objects.name.filter((obj) =>
      obj.name.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results); */
  };
  useEffect(() => {
    searchPokemon();
  }, [searchTerm]);

  return (
    <div>
      <Col>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            value={searchTerm}
            onChange={handleChange}
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Col>
      <Col>
        <ul>
          {searchResults.map((item) => (
            <li>{item.name}</li>
          ))}
        </ul>
      </Col>
    </div>
  );
}
