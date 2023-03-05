import { useState, useEffect } from "react";
import React from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import Axios from "axios";
import { Url } from "./Users";
import { useNavigate } from "react-router-dom";
export default function Update() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [id, setId] = useState("");
  const [place, setPlace] = useState("");

  const updateuser = async (e) => {
    e.preventDefault();
    await Axios.put(Url + id, {
      name,
      age,
      place,
    });
    navigate("/read");
  };
  useEffect(() => {
    setId(localStorage.getItem("id"));
    setAge(localStorage.getItem("age"));
    setName(localStorage.getItem("name"));
    setPlace(localStorage.getItem("place"));
  }, []);
  return (
    <Container>
      <br />
      <Form>
        <Row>
          <Form.Label column lg={2}>
            <b>NAME:</b>
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
            <b>AGE:</b>
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
            <b>PLACE:</b>
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
        <Button variant="outline-dark" onClick={updateuser} type="submit">
          Update
        </Button>
      </Form>
    </Container>
  );
}
