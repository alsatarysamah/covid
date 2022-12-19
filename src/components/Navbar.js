import {  useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";




export default function NavBarT() {
  const [userInfo, setUserInfo] = useState(
    sessionStorage.getItem("userInfo") || []
  );

  console.log(userInfo);

  const handleSignout=(e)=>{
sessionStorage.removeItem("userInfo")
  }



  useEffect(() => {}, [userInfo]);
  return (
    <>
      <Navbar bg="dark" variant="dark" fixed="top" className="mb-3">
        <Container>
          <Navbar.Brand href="/">COVID-19</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/allcountry">All Countries</Nav.Link>
            <Nav.Link href="/records">Records</Nav.Link>
            {userInfo.length == 0 ? (
              <Nav.Link href="/signin">Signin</Nav.Link>
            ) : (
              <Nav.Link href="/" onClick={handleSignout}>Signout</Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
// Advance Statistics Cards - Bootstrap 4 Admin Statistics Cards Layout UI Elements
