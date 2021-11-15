import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import Products from "./Products";
import Courses from "./courses";
import Home from "./home";
import Enquiry from "./enquiry";
import { GiShoppingBag } from "react-icons/gi";
import { Button } from "react-bootstrap";

function Nav1() {
  return (
    <Router>
      <div>
        <Navbar bg="dark" variant="dark" fixed>
          <Container>
            <Navbar.Brand href="#home" className="products-heading">
              Products
            </Navbar.Brand>
            <Nav className="me-auto">
              <Link to="/" class="nav-link">
                Home
              </Link>
              <Link to="/product" class="nav-link">
                Products
              </Link>
              <Link to="/course" class="nav-link">
                Courses
              </Link>
              <Link to="/enq" class="nav-link">
                Enquiry
              </Link>
            </Nav>
          </Container>
        </Navbar>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/product" exact component={Products} />
          <Route path="/course" exact component={Courses} />
          <Route path="/enq" exact component={Enquiry} />
        </Switch>
      </div>
    </Router>
  );
}

export default Nav1;
