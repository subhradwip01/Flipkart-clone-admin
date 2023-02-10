import React,{useState} from "react";
import Layout from "../../components/Layout";
import { Form, Button, Row, Col, Container, Alert } from "react-bootstrap";
import signupP from "../../assets/signup.webp";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../actions/register.actions";
const Signup = () => {

  const [userInfo,setUserInfo]=useState({
    firstName:"",
    lastName: "",
    email:"",
    password:""
  })
  const dispatch = useDispatch();
  const {error, message, loading} = useSelector(state=>state.register)

  const userInputHandler=(e)=>{
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value
    })
  }

  const signupHandler = (e)=> {
    e.preventDefault();
    dispatch(signup(userInfo))
    
  }

  return (
    <>
      <Layout>
        <Container>
          <Row className="align-items-center" style={{ height: "100vh" }}>
            <Col md={6}>
              <img
                src={signupP}
                style={{
                  width: "90%",
                }}
              />
            </Col>
            <Col md={6}>
            {message && !loading &&
                <Alert variant={error ? "danger" : 'success'}>
                  {message}
                </Alert>
              }
              <Form
                style={{
                  width: "100%",
                }}
              >
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control type="firstName" placeholder="Enter email" name="firstName" onChange={userInputHandler}/>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control type="lastName" placeholder="Enter email"name='lastName' onChange={userInputHandler}/>
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" name="email" onChange={userInputHandler}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" name="password" onChange={userInputHandler}/>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={signupHandler}>
                  {loading? "Signing up" : "Signup"}
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
