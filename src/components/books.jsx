import React from "react";
import { Row, Col, Dropdown } from "react-bootstrap";
import Fantasy from "../json/fantasy.json";
import Horror from "../json/horror.json";
import History from "../json/history.json";
import Romance from "../json/romance.json";
import Scifi from "../json/scifi.json";

class Books extends React.Component {
  state = {
    genre: Fantasy,
    category: "Fantasy",
  };

  render() {
    console.log(Fantasy);

    return (
      <>
        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            {this.state.category}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item
              href="#/action-1"
              onClick={() =>
                this.setState({ genre: Fantasy, category: "Fantasy" })
              }
            >
              Fantasy
            </Dropdown.Item>
            <Dropdown.Item
              href="#/action-2"
              onClick={() =>
                this.setState({ genre: History, category: "History" })
              }
            >
              History
            </Dropdown.Item>
            <Dropdown.Item
              href="#/action-3"
              onClick={() =>
                this.setState({ genre: Horror, category: "Horror" })
              }
            >
              Horror
            </Dropdown.Item>
            <Dropdown.Item
              href="#/action-3"
              onClick={() =>
                this.setState({ genre: Romance, category: "Romance" })
              }
            >
              Romance
            </Dropdown.Item>
            <Dropdown.Item
              href="#/action-3"
              onClick={() => this.setState({ genre: Scifi, category: "Scifi" })}
            >
              SciFi
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Row className="mt-4">
          {this.state.genre.map((item) => {
            return (
              <Col
                xs={12}
                md={4}
                lg={2}
                className="mb-3 position-relative"
                key={`item${item.asin}`}
              >
                <img
                  className="img-fluid"
                  src={item.img}
                  alt={item.name}
                  style={{ height: "200px", objectFit: "cover" }}
                />
              </Col>
            );
          })}
        </Row>
      </>
    );
  }
}
export default Books;