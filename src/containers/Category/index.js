import React, { useEffect } from 'react'
import { Alert, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getCategory } from '../../actions/category.action'
import Layout from '../../components/Layout'

const Category = () => {
   const dispatch = useDispatch(); 
   const {categories, loading, error, errorMessage} = useSelector(state=>state.category)
    useEffect(()=>{
        dispatch(getCategory())
    },[])
  console.log(categories)
  const renderCategories = (categories) =>{
    let rCategories = [];
    for(let category of categories){
        rCategories.push(
            <li key={category._id}>
                {category.name}
                {
                category.children.length>0 ?
                    <ul>
                        {renderCategories(category.children)}
                    </ul>
                    :
                    null
                }
            </li>
        )
    }
    return rCategories;
  }
  return (
    <Layout sidebar={true}>
        <Row>

            <Col md={12}>
                <div style={{
                    display:"flex",
                    justifyContent:'space-between',
                    margin:"10px 0"
                }}>
                    <h1>Category</h1>
                    <button>Add New</button>
                </div>
            </Col>
        </Row>
        <Row>
            {
                loading ? <h1 style={{
                    textAlign:"center"
                }}>Loading...</h1>
            :
            <Col md={12}>
                {error ? 
                <Alert variant="danger">
                {errorMessage}
              </Alert>
                :
                renderCategories(categories)
                }
            </Col>
            }
        </Row>
    </Layout>
  )
}

export default Category