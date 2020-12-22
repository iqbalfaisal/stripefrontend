import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

import { Col, Row, Button, Container } from "react-bootstrap";

function App() {
  const [product, setProduct] = useState([
    { id: 23 },
    { id: 23 },
    { id: 23 },
    { id: 23 },
    { id: 23 },
  ]);

  const token = "";

  useEffect(() => {
    fetchAllCoupons();
  }, []);

  const fetchAllCoupons = () => {
    const body = {
      token,
    };
    const headers = {
      "Content-Type": "application/json",
    };

    return fetch(`http://localhost:8282/allCoupons`, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log("RESPONSE ", response);
        const { status, data } = response;
        setProduct(data);
      })
      .catch((error) => console.log(error));
  };

  const deleteCoupon = () => {
    const body = {
      token,
    };
    const headers = {
      "Content-Type": "application/json",
    };

    return fetch(`http://localhost:8282/deleteCoupon`, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log("RESPONSE ", response);
      })
      .catch((error) => console.log(error));
  };

  const createCoupon = () => {
    const body = {
      token,
    };
    const headers = {
      "Content-Type": "application/json",
    };

    return fetch(`http://localhost:8282/createCoupon`, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log("RESPONSE ", response);
      })
      .catch((error) => console.log(error));
  };

  const listItems = product.map((item) => (
    <Row>
      <Col>{item.id}</Col>

      <Col>
        <Button onClick={() => deleteCoupon(item.id)}>delete</Button>
      </Col>
    </Row>
  ));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <a
          className="App-link"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Button onClick={() => createCoupon()}>create</Button>

      <Container>{listItems}</Container>
    </div>
  );
}

export default App;
