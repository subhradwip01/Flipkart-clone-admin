import React from 'react'
import Header from '../Header'
import { Container, Row, Col } from 'react-bootstrap'
import Sidebar from '../Sidebar'

const Layout = ({sidebar,children}) => {
  return (
    <>
        <Header/>
        <Container>
          {
            sidebar ? 
            <Row >
                <Sidebar/>
                <Col md={12} style={{
                  marginLeft:"30px"
                }}>{children}</Col>
            </Row>
            :
            children
          }
        </Container>
    </>
  )
}

export default Layout