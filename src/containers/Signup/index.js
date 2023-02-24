import React,{useState} from "react";
import Layout from "../../components/Layout";
import { Form, Button, Row, Col, Container, Alert } from "react-bootstrap";
import signupP from "../../assets/signup.webp";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../actions";
import Input from "../../components/Input";
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
                    <Input
                      label="First Name"
                      type="firstName"
                      placeholder="First Name"
                      name="firstName"
                      onChangeHandler={userInputHandler}
                    />
                  </Col>
                  <Col md={6}>
                    <Input
                      label="Last Name"
                       type="lastName"
                       placeholder="Last Name"
                       name="lastName"
                       onChangeHandler={userInputHandler}
                    />
                  </Col>
                </Row>
                <Input
                  label="Email address"
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  onChangeHandler={userInputHandler}
                />
                <Input
                  label="Password"
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChangeHandler={userInputHandler}
                />
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
