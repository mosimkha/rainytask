// 1
import React, { useEffect, useState } from "react";
import Home1 from "./Home1";
import Output from "./Output";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";

function App() {
  const [popData, setPopData] = useState([]);
  const API_KEY = "api_key=65322bde6241b3b6874ace20d05f9d22";

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?${API_KEY}`).then(
      (posRes) => {
        const { data } = posRes;
        const { results } = data;
        setPopData(results);
      },
      (errRes) => {
        throw new Error(`Error:${errRes}`);
      }
    );
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home1 popData={popData} />} />
          {/* <Route path="/" element={<User userData={userData} />} /> */}
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/user/:id" element={<Output />} />
          {/* <Route path="/user/:id" element={<Details />} /> */}
          {/* <Route path="/user/album/:id" element={<Photo />} /> */}
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
