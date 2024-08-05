import { Col, Row } from "antd";
import { BookCards, FavCards } from "./Cards";
import { books } from "../constants/mockData.js";
import { useState } from "react";
import "animate.css";
function Layout({ children }) {
  const [favorites, setFavorites] = useState([]);
  return (
    <>
      <div className="header-bar">
        <h1>Mehrshad Dadashzadeh</h1>
      </div>
      <Row gutter={16} dir="ltr" justify={"space-between"}>
        <Col
          dir="ltr"
          // xs={{ span: 24 }}
          // sm={{ span: 24 }}
          // md={{ span: 24 }}
          // lg={
          //   favorites.length != 0 && {
          //     span: 18,
          //   }
          // }
          // xl={
          //   favorites.length != 0 && {
          //     span: 18,
          //   }
          // }
          span={favorites.length != 0 ? 18 : 24}
        >
          <Row justify={"space-between"}>
            {books.map((items, index) => (
              <Col span={24}>
                <BookCards
                  key={index}
                  {...items}
                  favorites={favorites}
                  setFavorites={setFavorites}
                />
              </Col>
            ))}
          </Row>
        </Col>
        {favorites.length != 0 && (
          <Col
            // xs={{ span: 24 }}
            // sm={{ span: 24 }}
            // md={{ span: 24 }}
            // lg={{
            //   span: 6,
            // }}
            // xl={{
            //   span: 6,
            // }}
            span={6}
            dir="ltr"
            className="animate__animated animate__fadeInRight animate__faster"
          >
            <FavCards favorites={favorites} />
          </Col>
        )}
      </Row>
    </>
  );
}

export default Layout;
