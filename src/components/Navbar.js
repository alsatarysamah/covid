import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavBar from "./components/Navbar/Navbar";
import { Store } from "../store";

export default function NavBarT() {
  const { state, dispatch } = useContext(Store);
  const userInfo = state.userInfo;
  return (
    <>
      <Navbar bg="dark" variant="dark" fixed="top" className="mb-3">
        <Container>
          <Navbar.Brand href="/">COVID-19</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/allcountry">All Countries</Nav.Link>
            <Nav.Link href="/records">Records</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
// Advance Statistics Cards - Bootstrap 4 Admin Statistics Cards Layout UI Elements
