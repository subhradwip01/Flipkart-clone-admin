import React,{useState} from 'react'
import Layout from '../../components/Layout'
import { Alert, Col, Row, Button, Form } from "react-bootstrap";
import CustomModal from '../../components/Modal';
import Input from '../../components/Input';
import { useSelector } from 'react-redux';
const Products = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [productData,setProductData]=useState({
    name:"",
    price:"",
    quantity:"",
    description:"",
    reviews:[]
  })
  const { categories } = useSelector(
    (state) => state.category
  );

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

  const submitHanlder = () =>{

  }

  const userInputhandler = (e) =>{

  }
  return (
    <Layout sidebar={true} >
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
            <h1>Product</h1>
            <Button variant="primary" onClick={handleShow}>
              Add New
            </Button>
          </div>
        </Col>
      </Row>
      <CustomModal
          show={show}
          onHide={handleClose}
          title="Add Product"
          onSubmit={submitHanlder}
        >
          <Input
            label="Enter Category Name"
            placeholder="e.g. Mobile"
            name="name"
            type="name"
            onChangeHandler={userInputhandler}
          />
          <Input
            label="Enter Category Name"
            placeholder="e.g. Mobile"
            name="name"
            type="name"
            onChangeHandler={userInputhandler}
          />
          <Input
            label="Enter Category Name"
            placeholder="e.g. Mobile"
            name="name"
            type="name"
            onChangeHandler={userInputhandler}
          />

          <Form.Select
            onChange={userInputhandler}
          >
            <option>Select Category (If Any)</option>
            {createCategoryList(categories).map(({ name, value }) => (
              <option key={value} value={value}>{name}</option>
            ))}
          </Form.Select>
          <Input
            type="file"
            name="categoryImage"
            lable="Add Image"
            onChangeHandler={userInputhandler}
          />
        </CustomModal>
    </Layout>
  )
}

export default Products