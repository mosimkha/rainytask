import React, { useState } from "react";
import axios from "axios";
import {
  Nav,
  Navbar,
  Container,
  Form,
  FormControl,
  Button,
  Card,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const API_IMG = "https://image.tmdb.org/t/p/w500/";

const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?api_key=65322bde6241b3b6874ace20d05f9d22&language=en-US&query=";

function MyNav() {
  const [searchTerm, setSearchTerm] = useState([]);
  const [val, setVal] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.get(SEARCH_API + searchTerm).then((posRes) => {
      const { data } = posRes;
      console.log(data, "data");
      const { results } = data;
      console.log(results, "result");
      setVal(results);
    });
  };

  const handleonChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container fluid>
            <Navbar.Brand href="/">Insta Play</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              ></Nav>

              <Form className="d-flex" onSubmit={handleSubmit}>
                <FormControl
                  type="search"
                  placeholder="Search movies"
                  className="me-2"
                  aria-label="Search"
                  value={searchTerm}
                  onChange={handleonChange}
                />

                <Button variant="outline-success" type="submit">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Container>
          <Row md={4}>
            {val.map((element, index) => {
              return (
                <Card key={element.id}>
                  <Card.Img variant="top" src={API_IMG + element.poster_path} />
                  <Card.Body>
                    <Card.Title>{element.title}</Card.Title>
                    <Card.Text>
                      ⭐️ {(element.vote_average / 2).toFixed(1)}/5
                    </Card.Text>
                    <Link
                      to={`/user/${element.id}`}
                      className="btn btn-danger"
                      style={{ borderRadius: "18px" }}
                    >
                      <i class="fa-solid fa-play"></i>
                    </Link>
                  </Card.Body>
                </Card>
              );
            })}
          </Row>
        </Container>
      </>
    </div>
  );
}

export default MyNav;
