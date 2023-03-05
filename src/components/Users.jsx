import React, { useEffect, useState } from "react";
import Axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Table, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
export const Url = "https://63fce304677c4158731605ee.mockapi.io/users/";

export default function Users() {
  const navigate = useNavigate();
  const updateUser = ({ id, name, age, place }) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("age", age);
    localStorage.setItem("place", place);
    navigate("/edit");
  };
  const deleteUser = async (id) => {
    await Axios.delete(Url + id);
    callGetApi();
  };
  const [users, setUsers] = useState([]);

  const callGetApi = () => {
    Axios.get(Url).then((resp) => setUsers(resp.data));
  };

  useEffect(() => {
    callGetApi();
  }, []);

  return (
    <Container>
      {/* <h1>CRUD OPERATIONS USING REACT.JS</h1> */}

      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Place</th>
            <th>Actions</th>
          </tr>
        </thead>
        {users.map((user) => {
          return (
            <tbody>
              <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.place}</td>
                <td>
                  <Button
                    variant="outline-warning"
                    onClick={() => updateUser(user)}
                  >
                    Edit{" "}
                  </Button>
                  &nbsp;
                  <Button
                    variant="outline-danger"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </Table>
    </Container>
  );
}
