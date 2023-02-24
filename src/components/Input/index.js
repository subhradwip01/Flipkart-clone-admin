import React from "react";
import { Form } from "react-bootstrap";

const Input = ({label,type,placeholder,name,value,onChangeHandler}) => {
  return (
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChangeHandler}
      />
    </Form.Group>
  );
};

export default Input;
