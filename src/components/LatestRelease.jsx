import React, { Component, useState, useEffect } from "react";
import {
  Container,
  Row,
  Dropdown,
  Col,
  Card,
  DropdownButton,
  Button,
} from "react-bootstrap";
import Fantasy from "../json/fantasy.json";
import History from "../json/history.json";
import Horror from "../json/horror.json";
import Romance from "../json/romance.json";
import Scifi from "../json/scifi.json";
import { Link } from "react-router-dom";
import Search from "./Search";

let categories = ["fantasy", "history", "horror", "romance", "scifi"];

/* export default class LatestRelease extends Component {
    state= {
        category: "Fantasy",
        books: Fantasy,
    } */

export default function LatestRelease() {
  const [category, setCategory] = useState("Fantasy");
  const [books, setBooks] = useState(Fantasy);
  function booksChange(category) {
    if (category === "Fantasy") setBooks(Fantasy);
    else if (category === "History") setBooks(History);
    else if (category === "Horror") setBooks(Horror);
    else if (category === "Romance") setBooks(Romance);
    else if (category === "Scifi") setBooks(Scifi);
    else alert("no books selected");
  }
  /* let [array, setArray] = []; */
  let [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/?limit=1118");
  let [amount, setAmount] = useState(0);
  let [pokemons, setPokemons] = useState([]);
  let [next, setNext] = useState("");
  let [previous, setPrevious] = useState("");
  let [isInList, setIsInList] = useState(false);
  let [myList, setMyList] = useState([]);
  /* function handleChange(e) {
    setCategory(e.target.value);
    booksChange(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(category);
  }

  const handleSelect = (e) => {
    setCategory(e);
    booksChange(e);
  }; */

  const fetchPokemons = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    //console.log(data);
    setAmount(data.count);

    const fetchedPokemons = data.results;
    //const sortedPokemons = fetchedPokemons.sort((a, b) => b.name - a.name);

    /*   const songs = album.songs;
    const sortData = songs.sort((a, b) => a.number - b.number);
    album.song = sortData; */

    const sortedPokemons = fetchedPokemons.sort((a, b) => {
      if (a.name < b.name) return -1;
      else if (a.name > b.name) return 1;
      else return 0;
    });

    setPokemons(sortedPokemons);

    console.log(sortedPokemons);

    /* setArray(pokemons.concat(pokemons)); */
    /* setNext(data.next);
        setPrevious(data.previous); */
    setUrl(data.next);
  };

  /* const sortPokemons = () => {
    const pokemonsSorted = [...pokemons].sort(
      (a, b) => b[pokemons[2].name] - a[pokemons[3].name]
    );
    setPokemons(pokemonsSorted);
  }; */

  /* useEffect(() => {
    fetchPokemons(url);
  }, []); */

  /* chooseCategory = (category) => {
        category === value;
        this.setState({ chooseCategory: category });
        console.log(category)
  };  */

  /* render() { */

  /*  useEffect(() => {
    fetchPokemon(url);
  }, [url]); */
  return (
    <>
      <Container>
        <Row>
          {/* <form onSubmit={handleSubmit}>
            <h2>Choose your category</h2>
            <select onChange={handleChange} value={category}>
              <option value="Fantasy">Fantasy</option>
              <option value="History">History</option>
              <option value="Horror">Horror</option>
              <option value="Romance">Romance</option>
              <option value="Scifi">Scifi</option>
            </select>
            <button type="submit">Submit</button>
          </form> */}
          {/* <label for="category">Choose a category:</label>
                            <select name="categories" id="categories" form="catform">
                                <option value="Fantasy" onSelect={()=>this.setState({category:"Fantasy", books:Fantasy})}>fantasy</option>
                                <option value="History" onClick={()=>this.setState({category:"History", books:History})}>history</option>
                                <option value="Horror" onSelect={()=>this.setState({category:"Horror"})}>horror</option>
                                <option value="Romance" onSelect={() => {this.setState({books: Horror,category: "Horror",})}}>romance</option>
                                <option value="Scifi" onSelect={()=>this.setState({category:"Scifi"})}>scifi</option>
                        </select> */}
          {/* <Button variant="primary" onClick={() => this.chooseCategory()}>Choose your category!</Button>{' '} */}
          <h4>You have found {amount} pokemon</h4>
          {"   "}
          <Button variant="primary" onClick={() => fetchPokemons(url)}>
            Show All
          </Button>
          <Button variant="secondary" onClick={() => fetchPokemons(url)}>
            Show All
          </Button>
        </Row>
        <Row>
          {pokemons && (
            <ul>
              {pokemons.map((poke) => (
                <Link to={{ pathname: `/${poke.url.slice(34, -1)}` }}>
                  <li key={poke.url.slice(34, -1)}>
                    {poke.name}
                    {"  "}
                  </li>
                </Link>
              ))}
            </ul>
          )}
        </Row>
        <Row>
          {/* <Button variant="success" onClick={() => fetchPokemon(previous)}>
            Previous
          </Button>
          <Button variant="success" onClick={() => fetchPokemon(next)}>
            Next
          </Button> */}
        </Row>
        <Row>{pokemons && <Search objects={{ pokemons }} />}</Row>

        {/* <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 mb-4 text-center">
          <h1>{category}</h1>
        </Row>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 mb-4 text-center">
          {books.map((book) => (
            <Col>
              <Card
                className="mb-3"
                style={{ width: "250px", height: "450px" }}
                key={book.asin}
              >
                <Card.Img
                  variant="top"
                  style={{ height: "250px", objectFit: "cover" }}
                  src={book.img}
                />
                <Card.Body>
                  <Card.Title>{book.title} </Card.Title>
                  <Card.Text>
                    {book.title} | {book.price}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row> */}
      </Container>
    </>
  );
}
