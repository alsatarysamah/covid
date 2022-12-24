import Axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
// import { toast, ToastContainer } from "react-toastify";
import { useContext, useEffect, useState } from "react";
import { Store } from "../store";
import { toast, ToastContainer } from "react-toastify";
import superAgent from "superagent";
import base64 from "base-64";
import * as axios from 'axios';
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";

export default function Signin() {
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
     
      const response = await superAgent
        .post("https://covidserver.cleverapps.io/signin")
        .set("authorization", `Basic ${base64.encode(`${email}:${password}`)}`);
        console.log(response.body.user);
      sessionStorage.setItem("userInfo", JSON.stringify(response.body.user));
      // if (location.state) navigate(`${location.state.redirect}`);
       navigate("/");
    } catch (err) {
      toast.error("invalid password or username");
      console.log(err);
    }
  };
 
  return (
    <Container>
      <Helmet>
        <title>Signin</title>
      </Helmet>
      <Row className="vh-100 d-flex justify-content-center align-items-center">
        <Col md={8} lg={5} xs={12}>
          <div className=""></div>
          <ToastContainer />
          <Card className="shadow px-4">
            <Card.Body>
              <div className="mb-3 mt-md-4">
                <h2 className="fw-bold mb-2 text-center  ">Signin</h2>
                <div className="mb-1">
                  <Form onSubmit={submitHandler}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="text-center">Username</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter username"
                        onChange={(e) => setEmail(e.target.value)}
                        autocomplete="off"
                        required
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="formBasicPas
                  sword"
                    >
                      <Form.Label className="text-center">Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Enter password"
                        onChange={(e) => setPassword(e.target.value)}
                        autocomplete="off"
                        required
                      />
                    </Form.Group>

                    <div className="d-grid">
                      <Button id="delete-btn" variant="primary" type="submit">
                        Signin
                      </Button>
                    </div>
                    <div className="mt-3">
                      New customer?{" "}
                      <Link to={`/signup`}>Create your account</Link>
                    </div>
                  </Form>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
//?redirect=${redirect}
