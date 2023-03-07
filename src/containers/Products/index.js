import React,{useState,useEffect} from 'react'
import Layout from '../../components/Layout'
import { Alert, Col, Row, Button, Form, Table } from "react-bootstrap";
import CustomModal from '../../components/Modal';
import Input from '../../components/Input';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../../actions';
import "./index.product.css"
const Products = () => {
  const [show, setShow] = useState(false);
  const [showDetails,setShowDetails]=useState(false)
  const [productData,setProductData]=useState({
    name:"",
    price:"",
    quantity:"",
    description:"",
    category:"",
  })
  const [product,setProduct]=useState(null);
  
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  

  const [productPictures,setProductPictures] = useState([])

  const { categories } = useSelector(
    (state) => state.category
  );
  const { products } = useSelector(
    (state) => state.product
  );

  const handleDetailsClose = () => setShowDetails(false);
  const handleDetailsShow = (product) => {
    setShowDetails(true)
    setProduct(product)
    console.log(product)
  };

  
  

  const dispatach = useDispatch();
  

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

  const renderProducts = () =>{
    return (
      <Table striped responsive bordered>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Category</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {products.length>0 && 
        products.map((product,index)=>(
          <tr>
        <td>{index+1}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>{product.quantity}</td>
        <td>{product.category.name}</td>
        <td>
          <Button variant='secondary' onClick={()=>handleDetailsShow(product)}>View</Button>
        </td>
      </tr>
        ))
        
        }
        
       
      </tbody>
    </Table>
    )
  }


  const renderAddProduct = () =>{
    return (
      <CustomModal
          show={show}
          onHide={handleClose}
          title="Add Product"
          onSubmit={submitHanlder}
        >
          <Input
            label="Enter Product Name"
            placeholder="e.g. Samsung A52"
            name="name"
            type="name"
            value={productData.name}
            onChangeHandler={userInputhandler}
          />
          <Input
            label="Enter Price"
            placeholder="e.g. 15000"
            name="price"
            type="number"
            value={productData.price}
            onChangeHandler={userInputhandler}
          />
          <Input
            label="Description"
            placeholder="e.g. 120 Hz Touch Sampling Rate, Sunlight Screen Support, COG Sealing Process, In Cell Touch Panel ..."
            name="description"
            type="text"
            value={productData.description}
            onChangeHandler={userInputhandler}
          />

          <Input
            label="Enter Quantity"
            placeholder="e.g. 50"
            name="quantity"
            type="number"
            value={productData.quantity}
            onChangeHandler={userInputhandler}
          />

          <Form.Select
            name="category"
            onChange={userInputhandler}
            value={productData.category}
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
            value={productPictures[-1]}
            onChangeHandler={porductPictureHander}
          />
          <div/>
          <div/>
          {productPictures.length > 0 &&
            productPictures.map((image,index)=>(
              <div key={index}>
                 {image.name}
              </div>
            ))
          }
        </CustomModal>
    )
  }

  const renderProductDetailModal = () =>{
    if(!product){
      window.alert("Sorry unable to find product")
      return;
    }
    console.log(product.productPictures)
    return (
      <CustomModal
      show={showDetails}
      onHide={handleDetailsClose}
      title="Product Details"
      detailsModal={true}
      >
      <Row>
        <Col md={6}>
          <p className='key'>Name</p>
        </Col>
        <Col md={6}>
          <p>{product.name}</p>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <p className='key'>Quantity</p>
        </Col>
        <Col md={6}>
          <p>{product.quantity}</p>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <p className='key'>price</p>
        </Col>
        <Col md={6}>
          <p>{product.price}</p>
        </Col>
      </Row>
      <p className='key'>
        Description
      </p>
      <p style={{textAlign: "justify"}}>
        {product.description}
      </p>
      <div className='productImageContainer'>
      {product.productPictures.map((prod)=>(
        <div>
          <img src={prod.img}/>
        </div>
      ))}

      </div>


      </CustomModal>
    )
  } 


  const submitHanlder = () =>{
    const productInfo = new FormData();
    productInfo.append('name',productData.name);
    productInfo.append('quantity',productData.quantity);
    productInfo.append('price',productData.price);
    productInfo.append('description',productData.description);
    productInfo.append('category',productData.category);
    for (let pic of productPictures){
      productInfo.append('productPictures',pic)
    }
    dispatach(addProduct(productInfo));
    setProductData({
    name:"",
    price:"",
    quantity:"",
    description:"",
    category:"",
    })
    handleClose();
  }

  const porductPictureHander = (e)=>{
    setProductPictures([
      ...productPictures,
      e.target.files[0]
    ])
  }

  const userInputhandler = (e) =>{
    console.log(e.target.name)
    setProductData({
      ...productData,
      [e.target.name]:e.target.value,
    })
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
        <Col md={12}>
          {renderProducts()}
        </Col>
      </Row>
      {show && renderAddProduct()}
      {showDetails && renderProductDetailModal()}
    </Layout>
  )
}

export default Products