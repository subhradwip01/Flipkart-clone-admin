import React, { useEffect, useState } from "react";
import { Alert, Col, Row, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addCategory } from "../../actions";
import Layout from "../../components/Layout";
import CustomModal from "../../components/Modal";
import Input from "../../components/Input";
const Category = () => {
  const dispatch = useDispatch();
  const { categories, loading, error, errorMessage } = useSelector(
    (state) => state.category
  );
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [parentId, setParentId] = useState(undefined);
  const [categoryImage,setCategoryImage]=useState(null);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const renderCategories = (categories) => {
    let rCategories = [];
    for (let category of categories) {
      rCategories.push(
        <li key={category._id}>
          {category.name}
          {category.children.length > 0 ? (
            <ul>{renderCategories(category.children)}</ul>
          ) : null}
        </li>
      );
    }
    return rCategories;
  };

  const createCategoryList = (categories, options = []) => {
    for (let category of categories) {
      options.push({
        name: category.name,
        value: category._id,
      });
      if (category.children.length > 0) {
        createCategoryList(category.children, options);
      }
    }
    return options;
  };

  const submitHanlder = (e) => {
    e.preventDefault();
    const category = new FormData();
    category.append('name',name)
    parentId && category.append('parentId',parentId)
    category.append('categoryImage',categoryImage)
    // console.log(name,parentId)
    dispatch(addCategory(category));
    setCategoryImage("");
    setName("");
    setParentId("")
    !loading && handleClose();
  };

  return (
    <Layout sidebar={true}>
      <Row>
        <Col md={12}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "10px 0",
              alignItems: "center",
            }}
          >
            <h1>Category</h1>
            <Button variant="primary" onClick={handleShow}>
              Add New
            </Button>
          </div>
        </Col>
      </Row>
      <Row>
        {loading ? (
          <h1
            style={{
              textAlign: "center",
            }}
          >
            Loading...
          </h1>
        ) : (
          <Col md={12}>
            {error ? (
              <Alert variant="danger">{errorMessage}</Alert>
            ) : (
              renderCategories(categories)
            )}
          </Col>
        )}
        <CustomModal
          show={show}
          onHide={handleClose}
          title="Add Category"
          onSubmit={submitHanlder}
          loading={loading.toString()}
        >
          <Input
            label="Enter Category Name"
            placeholder="e.g. Mobile"
            name="name"
            type="name"
            value={name}
            onChangeHandler={(e) => setName(e.target.value)}
          />

          <Form.Select
            onChange={(e) => {
              setParentId(e.target.value);
            }}
            value={parentId}
          >
            <option>Select Parent Category (If Any)</option>
            {createCategoryList(categories).map(({ name, value }) => (
              <option key={value} value={value}>{name}</option>
            ))}
          </Form.Select>
          <Input
            type="file"
            name="categoryImage"
            lable="Add Image"
            value={categoryImage}
            onChangeHandler={(e)=>setCategoryImage(e.target.files[0])}
          />
        </CustomModal>
      </Row>
    </Layout>
  );
};

export default Category;
