import React from "react";
import Layout from "../../components/Layout";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import signup from "../../assets/signup.webp";
const Signup = () => {
  return (
    <>
      <Layout>
        <Container>
          <Row className="align-items-center" style={{ height: "100vh" }}>
            <Col md={6}>
              <img
                src={signup}
                style={{
                  width: "90%",
                }}
              />
            </Col>
            <Col md={6}>
              <Form
                style={{
                  width: "100%",
                }}
              >
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Signup
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  );
};

export default Signup;
