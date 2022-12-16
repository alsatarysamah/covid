import logo from "./logo.svg";
import "./App.css";
import { Container } from "react-bootstrap";
import NavBarT from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Country from "./components/Countries/Country";

function App() {
  return (
    <div className="d-flex flex-column site">
      <header>
        <NavBarT></NavBarT>
      </header>
      <main>
        <Container className="mt-3">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/allcountry" element={<Country />} />
          </Routes>
        </Container>
      </main>

      <footer bg="dark" variant="dark">
        <div className="text-center">All right is reserved</div>
      </footer>
    </div>
  );
}

export default App;
