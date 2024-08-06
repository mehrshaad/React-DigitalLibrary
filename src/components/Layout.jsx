import { Col, Row, Divider, Input, Spin, Button, Space } from "antd";
import { SearchOutlined, CloseOutlined } from "@ant-design/icons";
import signature from "../assets/signature.png";
import { BookCards, FavCards, NotFound } from "./Cards";
import { books } from "../constants/mockData.js";
import { useState, useEffect } from "react";
import "animate.css";
function Layout() {
  const [favorites, setFavorites] = useState(["Things Fall Apart"]);
  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState(books);
  const [loading, setLoading] = useState(true);
  const link = "https://github.com/mehrshaad";
  useEffect(() => {
    const onPageLoad = () => {
      setTimeout(function () {
        setLoading(() => false);
      }, 500);
    };

    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad, false);
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);
  const onSearch = () => {
    setLoading(() => true);
    const filteredBooks = books.filter((story) => {
      const item = JSON.stringify(story);
      return item.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase());
    });
    setTimeout(function () {
      setData(filteredBooks);
      setLoading(() => false);
    }, 500);
  };
  return (
    <>
      {loading && (
        <div className="loading">
          <Spin spinning={loading} fullscreen size="large" />
        </div>
      )}
      <div className="header-bar">
        <Row justify="space-between" align="middle" style={{ height: "75px" }}>
          <Col flex={0}>
            <img
              className="sign"
              src={signature}
              alt=""
              onClick={() => window.open(link)}
            />
          </Col>
          <Col flex={3}>
            <h2 className="header-title">Digital Library</h2>
          </Col>
          <Col flex={1} align="end">
            <h3 className="developer" onClick={() => window.open(link)}>
              Developed By Ali Dadashzadeh
            </h3>
          </Col>
        </Row>
      </div>
      <Row gutter={16} dir="ltr" justify={"space-between"}>
        <Col span={24}>
          <Space.Compact
            className="search-space"
            direction="horizontal"
            style={{ width: "100%" }}
          >
            <Input
              placeholder="Search the books..."
              size="large"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="search"
              prefix={<SearchOutlined />}
              onPressEnter={onSearch}
            />
            <Button
              title="Search"
              type="primary"
              icon={<SearchOutlined />}
              size="large"
              onClick={onSearch}
            >
              Search
            </Button>
            <Button
              title="Search"
              type="primary"
              danger
              icon={<CloseOutlined />}
              size="large"
              onClick={() => {
                setLoading(() => true);
                setTimeout(function () {
                  setData(() => books);
                  setSearchValue(() => "");
                  setLoading(() => false);
                }, 100);
              }}
            >
              Clear
            </Button>
          </Space.Compact>
        </Col>
      </Row>
      <Row gutter={16} dir="ltr" justify={"space-between"}>
        <Col dir="ltr" span={favorites.length != 0 ? 18 : 24}>
          <Row justify={"space-between"}>
            {data.length != 0 ? (
              data.map((items, index) => (
                <Col span={24}>
                  <BookCards
                    key={index}
                    {...items}
                    favorites={favorites}
                    setFavorites={setFavorites}
                  />
                </Col>
              ))
            ) : (
              <NotFound />
            )}
          </Row>
        </Col>
        {favorites.length != 0 && (
          <Col
            span={6}
            dir="ltr"
            className="animate__animated animate__fadeInRight animate__faster"
          >
            <FavCards favorites={favorites} />
          </Col>
        )}
        <Divider className="footer">Ali Dadashzadeh © Aug, 2024</Divider>
      </Row>
    </>
  );
}

export default Layout;
