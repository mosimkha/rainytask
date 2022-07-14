// 2
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Card, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavBar1 from "./NavBar1";

const API_IMG = "https://image.tmdb.org/t/p/w500/";
function Home1(props) {
  const { popData } = props;

  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(popData.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(popData.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, popData]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % popData.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <NavBar1 />

      <Container>
        <Row md={4}>
          {currentItems.map((element, index) => {
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

      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        activeClassName="active"
      />
    </>
  );
}

export default Home1;

// #263F61
