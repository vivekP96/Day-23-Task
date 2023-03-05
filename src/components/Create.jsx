import React, { useState } from "react";
import { Form, Button, Row, Col, Alert, Container } from "react-bootstrap";
import { Url } from "./Users";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Create() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [place, setPlace] = useState("");
  const navigate = useNavigate();
  const postData = async (e) => {
    e.preventDefault();
    await Axios.post(Url, {
      name,
      age,
      place,
    });
    navigate("/read");
  };
  return (
    <Container>
      <Alert key="info " variant="info ">
        <h3>CREATE NEW USER BY FILLING THIS FORM!!!!</h3>
      </Alert>
      <Form>
        <Row>
          <Form.Label column lg={2}>
            <b>Name</b>
          </Form.Label>
          <Col>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="Enter Name"
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Form.Label column lg={2}>
            <b>Age</b>
          </Form.Label>
          <Col>
            <Form.Control
              type="text"
              value={age}
              onChange={(e) => {
                setAge(e.target.value);
              }}
              placeholder="Enter Age"
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Form.Label column lg={2}>
            <b>Place</b>
          </Form.Label>
          <Col>
            <Form.Control
              type="text"
              value={place}
              onChange={(e) => {
                setPlace(e.target.value);
              }}
              placeholder="Enter Place"
            />
          </Col>
        </Row>
        <br />
        <Button variant="outline-dark" onClick={postData} type="submit">
          Create
        </Button>
      </Form>
    </Container>
  );
}
