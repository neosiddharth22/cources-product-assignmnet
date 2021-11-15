import axios from "axios";
import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { MyVerticalCenteredModal } from "./modal";

function Courses() {
  const [data, setData] = useState([]);
  const [course, setCourse] = useState("");
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:3001/courses").then((res) => setData(res.data));
  });

  return (
    <div>
      <h1
        className="products-heading"
        style={{ textAlign: "center", margin: "7px 0px" }}
      >
        Courses
      </h1>
      <Table
        striped
        bordered
        hover
        variant="dark"
        style={{
          width: "70%",
          margin: "0px auto",
          border: "2px ",
        }}
        className="text-dark font-weight-bold"
      >
        <thead style={{ padding: "40px" }} className="text-light">
          <tr>
            <th>Sr.No.</th>
            <th>Course</th>
            <th>Duration</th>
            <th style={{ textAlign: "center" }}>Action</th>
          </tr>
        </thead>
        <tbody style={{ padding: "40px", backgroundColor: "powderblue" }}>
          {data.map((index) => (
            <tr>
              <td>{index.cid}</td>
              <td>{index.name}</td>
              <td>{index.duration} yrs</td>
              <td style={{ textAlign: "center" }}>
                <Button
                  onClick={() => {
                    setModalShow(true);
                    setCourse(index.name);
                  }}
                  variant="warning"
                  className="font-weight-bold"
                >
                  Enquiry
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <MyVerticalCenteredModal
        course={course}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default Courses;
