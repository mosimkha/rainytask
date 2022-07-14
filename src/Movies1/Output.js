import React, { useEffect, useState } from "react";
import "./MovieDetail.css";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
const API_IMG = "https://image.tmdb.org/t/p/w1280/";
const API_KEY = "api_key=65322bde6241b3b6874ace20d05f9d22";

function Output() {
  const { id } = useParams();
  const [val, setVal] = useState([]);
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}?${API_KEY}`)
      .then((posRes) => {
        const { data } = posRes;
        console.log(data.overview);
        setVal(data);
      });
  }, [id]);

  var divStyle = {
    // backgroundImage: "url(" + API_IMG + val.backdrop_path + ")",
    background: `linear-gradient(90deg, #000000 0px, rgba(0, 0, 0, 0) 100%),url("${
      API_IMG + val.backdrop_path
    }") `,
    // backgroundsize: "cover",
    // height: "100%",
    // position: "absolute",
  };

  // const paraStyle = {
  // height: "100vh",
  // background: "#000000",
  // color: "yellow",
  //   display: "flex",
  //   // alignItems: "center",
  //   // position: "absolute",
  //   // width: "428px",
  //   // height: "650px",
  //   // left: "0px",
  //   // top: "70px",
  // };

  return (
    <div>
      <Container fluid>
        <Row>
          <Col className="paraStyle">
            <div>
              {/* <div style={{ margin: "100px 20px", color: "red" }}> */}
              <Link to="/">
                <i class="fa-solid fa-arrow-left-long" />
              </Link>
              <br />
              <br />
              <h4>{val.title}</h4>
              <p> Rating: {(val.vote_average / 2).toFixed(2)}/5 </p>
              <p> {val.overview}</p>
              <p> Release Date {val.release_date}</p>
              <p>Orignal Language {val.original_language}</p>
            </div>
          </Col>
          <Col sm={9} style={divStyle}>
            {/* <div style={divStyle}></div> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Output;

// https://api.themoviedb.org/3/movie/616037?api_key=65322bde6241b3b6874ace20d05f9d22
// https://image.tmdb.org/t/p/w1280/p1F51Lvj3sMopG948F5HsBbl43C.jpg
