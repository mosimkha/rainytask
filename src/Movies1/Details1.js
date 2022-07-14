import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const API_IMG = "https://image.tmdb.org/t/p/w1280/";
const API_KEY = "api_key=65322bde6241b3b6874ace20d05f9d22";
function Details() {
  const { id } = useParams();
  const [val, setVal] = useState([]);
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}?${API_KEY}`)
      .then((posRes) => {
        const { data } = posRes;

        setVal(data);
      });
  }, []);

  var divStyle = {
    backgroundImage: "url(" + API_IMG + val.backdrop_path + ")",
    background: `linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0) 100% ),url("${
      API_IMG + val.backdrop_path
    }") `,
    position: "absolute",
    width: "1014px",
    height: "647px",
    left: "394px",
    top: "70px",
  };

  var paraStyle = {
    position: "absolute",
    width: "428px",
    height: "650px",
    left: "0px",
    top: "70px",
    background: "#000000",
    color: "white",
  };

  return (
    <div class="maind">
      <div style={paraStyle}>
        <div class="innerdiver">
          <br />
          <h4>{val.title}</h4>
          <p> Rating: {(val.vote_average / 2).toFixed(2)}/5 </p>
          <p> {val.overview}</p>
          <p> Release Date {val.release_date}</p>
          <p>Orignal Language {val.original_language}</p>
        </div>
      </div>

      <div style={divStyle}></div>
    </div>
  );
}

export default Details;
