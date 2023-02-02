import React from "react";
import Layout from "../../components/Layout";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import loginI from "../../assets/loginI.png"
import {login} from "../../actions"
import { useDispatch } from "react-redux";
const Signin = () => {

  const dispatch = useDispatch()

  const signinHandler = (e) =>{
    e.preventDefault()
    dispatch(login({
      email: "subhra@gmail.com",
      password:"123456"
    }));
  }

  return (
    <>
      <Layout>
        <Container >
          <Row className="align-items-center" style={{height:"100vh"}}>
            <Col md={6}>
            <img src={loginI} style={{
              width:"90%"
            }}/>
            </Col>
            <Col md={6}>
          <Form style={{
            width:"100%"
          }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={signinHandler}>
              Signin
            </Button>
          </Form>
          </Col>
          </Row>
        </Container>
      </Layout>
    </>
  );
};

export default Signin;
