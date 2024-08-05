import { Col, Row, Button, List, Space } from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import "animate.css";
export function BookCards({
  key,
  id,
  author,
  country,
  image,
  language,
  link,
  pages,
  title,
  year,
  favorites,
  setFavorites,
}) {
  return (
    <>
      <div
        className={"cards books"}
        key={key}
        onClick={() => window.open(link)}
      >
        <Row gutter={[16, 0]}>
          <Col flex="100px">
            <img src={`../public/assets/${image}`} alt="" />
          </Col>
          <Col flex={"auto"}>
            {favorites.includes(title) ? (
              <Button
                type="link"
                icon={<HeartFilled style={{ color: "red" }} />}
                onClick={() =>
                  setFavorites((favorites) =>
                    favorites.filter((val) => val != title)
                  )
                }
              />
            ) : (
              <Button
                type="link"
                icon={<HeartOutlined style={{ color: "white" }} />}
                onClick={() => setFavorites([...favorites, title])}
              />
            )}
            <Space size={"small"} align="start">
              <h2 className="title">{title}</h2>
            </Space>
            <br />
            <Space size={"large"} align="start">
              <p className="passive">
                Author: <span className="active">{author}</span>
              </p>
              <p className="passive">
                Country: <span className="active">{country}</span>
              </p>
            </Space>
            <br />
            <Space size={"large"} align="start">
              <p className="passive">
                Language: <span className="active">{language}</span>
              </p>
              <p className="passive">
                Pages: <span className="active">{pages}</span>
              </p>
              <p className="passive">
                Year: <span className="active">{year}</span>
              </p>
            </Space>
          </Col>
        </Row>
      </div>
    </>
  );
}
export function FavCards({ favorites }) {
  return (
    <>
      <div className={"cards favs"}>
        <Row gutter={[16, 0]}>
          <Col span={24}>
            <h1 className="header">Favorite Books</h1>
          </Col>
          <Col span={24}>
            <List itemLayout="horizontal">
              {favorites.map((items) => (
                <List.Item
                  className={
                    "books animate__animated animate__fadeIn animate__faster"
                  }
                >
                  {items}
                </List.Item>
              ))}
            </List>
          </Col>
        </Row>
      </div>
    </>
  );
}
