import React, { Component, useState } from "react";
import { Container, Row, Dropdown, Col, Card, Button } from "react-bootstrap";
import Fantasy from "../json/fantasy.json";
import History from "../json/history.json";
import Horror from "../json/horror.json";
import Romance from "../json/romance.json";
import Scifi from "../json/scifi.json";

let categories = ["fantasy", "history", "horror", "romance", "scifi"];

/* export default class LatestRelease extends Component {
    state= {
        category: "Fantasy",
        books: Fantasy,
    } */

export default function LatestRelease() {
  const [category, setCategory] = useState("Fantasy");
  const [books, setBooks] = useState(Fantasy);
  function handleChange(e) {
    setCategory(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(category);
  }
  /* chooseCategory = (category) => {
        category === value;
        this.setState({ chooseCategory: category });
        console.log(category)
  };  */

  /* render() { */
  return (
    <>
      <Container>
        <Row>
          {/* <form onSubmit={handleSubmit}>
            <h2>Choose your framework</h2>
            <select onChange={handleChange} value={category}>
              <option value="react">React</option>
              <option value="angular">Angular</option>
              <option value="vue">Vue</option>
            </select>
            <button type="submit">Submit</button>
          </form> */}
          <Dropdown onSubmit={handleSubmit}>
            <Dropdown.Toggle
              variant="primary"
              id="dropdown-basic"
              onChange={handleChange}
              value={category}
            >
              Choose a Category
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                value="Fantasy"
                /* onClick={(setBooks(Fantasy), setCategory("Fantasy"))} */
              >
                Fantasy
              </Dropdown.Item>
              <Dropdown.Item
                value="History"
                /* onClick={(setBooks(History), setCategory("History"))} */
              >
                History
              </Dropdown.Item>
              <Dropdown.Item
                value="Horror"
                /* onClick={(setBooks(Horror), setCategory("Horror"))} */
              >
                Horror
              </Dropdown.Item>
              <Dropdown.Item
                value="Romance"
                /* onClick={(setBooks(Romance), setCategory("Romance"))} */
              >
                Romance
              </Dropdown.Item>
              <Dropdown.Item
                value="Scifi"
                /*  onClick={(setBooks(Scifi), setCategory("Scifi"))} */
              >
                Scifi
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          {/* <label for="category">Choose a category:</label>
                            <select name="categories" id="categories" form="catform">
                                <option value="Fantasy" onSelect={()=>this.setState({category:"Fantasy", books:Fantasy})}>fantasy</option>
                                <option value="History" onClick={()=>this.setState({category:"History", books:History})}>history</option>
                                <option value="Horror" onSelect={()=>this.setState({category:"Horror"})}>horror</option>
                                <option value="Romance" onSelect={() => {this.setState({books: Horror,category: "Horror",})}}>romance</option>
                                <option value="Scifi" onSelect={()=>this.setState({category:"Scifi"})}>scifi</option>
                        </select> */}

          {/* <Button variant="primary" onClick={() => this.chooseCategory()}>Choose your category!</Button>{' '} */}
        </Row>

        <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 mb-4 text-center">
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
        </Row>
      </Container>
    </>
  );
}
