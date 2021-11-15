import React, { useState, useEffect, useRef } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";

// const RegForEmail = RegExp("^[a-zA-Z0-9._-]+@[A-zA-Z0-9.-]+.com$");
// const RegForName = RegExp("^[a-zA-Z]+\\s[a-zA-Z]+$");
const regForName = RegExp(/^[a-zA-Z]+( [a-zA-Z]+)+$/);
const regForEmail = RegExp(
  /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
);

export function MyVerticalCenteredModal(props) {
  const [error, setError] = useState({
    ename: "",
    eemail: "",
    equery: "",
  });
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const queryRef = useRef(null);

  /////////////////////////////////////////////////////////////
  const handler = (event) => {
    const name = event.target.name;
    console.log(name);
    switch (name) {
      case "name":
        const err1 =
          nameRef.length > 2 || regForName.test(nameRef.current.value)
            ? " "
            : "Enter Valid Name";
        setError({ ename: err1 });
        break;
      case "email":
        const err2 =
          emailRef.length > 2 || regForEmail.test(emailRef.current.value)
            ? ""
            : "Enter Valid Email";
        setError({ eemail: err2 });
        break;

      // case "query":
      //   const err3 = queryRef.length > 2 ? " " : "Enter Valid Query ";
      //   setError({ equery: err3 });
      //   break;

      default:
    }
  };

  ////////////////////////////////////////////////////////////

  /////////////////////////////////////////////////////////////
  const onSubmit = () => {
    console.log(error);
    if (validate(error)) {
      const formData = {
        course: props.course,
        name: nameRef.current.value,
        email: emailRef.current.value,
        query: queryRef.current.value,
      };

      console.log(formData);
      alert("form Submitted");

      axios.post("http://localhost:3001/enquiry", formData);
      {
        props.onHide();
      }
    } else {
      alert("Invalid Form");
    }
  };
  ///////////////////////////////////////////////////////
  const validate = (error) => {
    let valid = true;

    Object.values(error).forEach((val) => val.length > 0 && (valid = false));
    return valid;
  };
  //////////////////////////////////////////////////////////////
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Enquiry</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Course Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Course name"
              value={props.course}
              disabled
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter Your Name"
              onChange={handler}
              ref={nameRef}
            />
            <small style={{ color: "red" }}>{error.ename}</small>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Your Email id"
              onChange={handler}
              name="email"
              ref={emailRef}
            />
            <small style={{ color: "red" }}>{error.eemail}</small>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Query</Form.Label>
            <Form.Control
              type="textarea"
              name="query"
              placeholder="Enter Your Query"
              onChange={handler}
              ref={queryRef}
              row={4}
            />
            <small style={{ color: "red" }}>{error.equery}</small>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onSubmit} variant="info">
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticalCenteredModal;
