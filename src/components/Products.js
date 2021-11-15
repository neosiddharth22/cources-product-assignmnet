import axiois from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Card, Row, Col, Button, Container } from "react-bootstrap";

function Products() {
  const [state, setState] = useState({ prodata: [] });
  useEffect(() => {
    const URL = "http://localhost:3001/products";
    axiois.get(URL).then((res) => {
      console.log(res.data);
      setState({ ...state, prodata: res.data });
    });
  }, []);
  return (
    <Container fluid>
      <h2 className="products-heading font-weight-bold">Products</h2>
      <Card style={{ margin: "10px 0px" }}>
        <Card.Img variant="top" src="./img/wall.jpeg" height="400px" />
      </Card>
      <Row>
        {state.prodata.map((items) => {
          return (
            <Col>
              <Card
                style={{
                  width: "16rem",
                  height: "23rem",
                  marginLeft: "50px",
                  marginTop: "15px",
                  backgroundColor: "lightblue",
                }}
              >
                <Card.Img src={items.img} height="200px" />
                <Card.Body className="font-weight-bold">
                  <Card.Title className="products-name font-weight-bold">
                    {items.pname}
                  </Card.Title>
                  <Card.Text variant="danger">
                    Price :<font color="red"> Rs.{items.price}</font>
                  </Card.Text>
                  <Button variant="primary">Add to cart</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Products;
