import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { toast,ToastContainer } from "react-toastify";
import { Store } from "../store";
import {
  Col,
  Button,
  Row,
  Container,
  Card,
  Form,
 
} from "react-bootstrap";
export default function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState("");



  const signupHandler = (e) => {
    e.preventDefault();
    if (password != confirmPassword) {
      toast.error("password do not match ");
      return;
    }
    
      axios
        .post("https://covid-19-asac.up.railway.appsignup", { username, password, email })
        .then((data) => {
           sessionStorage.setItem('userInfo', JSON.stringify(data));
          navigate('/signin');
      
    }).catch((e)=>{toast.error("username already exist");});
   
  };
  return (
    <>
      <Container className="small-container">
        <Helmet>
          <title>Signup</title>
        </Helmet>

       <Row className="vh-100 d-flex justify-content-center align-items-center">
      <Col md={8} lg={5} xs={12}>
        <div className=""></div>
        <ToastContainer />
        <Card className="shadow px-4">
          <Card.Body>
            <div className="mb-3 mt-md-4">
              <h2 className="fw-bold mb-2 text-center  ">
                Signup
              </h2>
              <div className="mb-1">
        <Form onSubmit={signupHandler}>
          <Form.Group className="mb-3" controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
              // value={username}
              onChange={(e) => setUsername(e.target.value
                )}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              value={email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </Form.Group>

          <div className="d-grid">

          <Button id="delete-btn" variant="primary" type="submit">

              Sign Up
            </Button>
          </div>
          <div className="mt-3">
          Already have an account?{' '}
          <Link to={`/signin`}>Sign-In</Link>
        </div>
        </Form>
               </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
      </Container>
    </>
  );
}
