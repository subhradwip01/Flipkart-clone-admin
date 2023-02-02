import React, { useState } from "react";
import Layout from "../../components/Layout";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import loginI from "../../assets/loginI.png"
import {login} from "../../actions"
import { useDispatch } from "react-redux";
const Signin = () => {

  const [userInfo,setUserInfo] = useState({
    email:"",
    password:""
  })

  const dispatch = useDispatch()

  const inputHandler = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]:e.target.value
    })
  }

  const signinHandler = (e) =>{
    e.preventDefault()
    console.log(userInfo)
    dispatch(login(userInfo));
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
              <Form.Control type="email" placeholder="Enter email" name="email" onChange={inputHandler}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" name="password" onChange={inputHandler}/>
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
