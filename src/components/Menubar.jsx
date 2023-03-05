import { Alert } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Menubar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Create Data</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/read">Read Data</Nav.Link>
        </Nav>
      </Navbar>
      <Alert key="info " variant="info ">
        <h3>CRUD OPERATIONS USING REACT.JS!!!!</h3>
      </Alert>
    </>
  );
}

export default Menubar;
