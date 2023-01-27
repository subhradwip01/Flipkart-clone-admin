import React from 'react'
import Layout from '../../components/Layout'
import header from "../../assets/ecom-home.png"

const Home = () => {
  return (
    <Layout>
        <div style={{
          textAlign:"center",
          padding:"50px 30px"
        }}>
          <img src={header} alt="logo"/>
          <h1 style={{
            fontWeight:900,
            marginBottom:"20px"
          }}>Welcome to ECOM ADMIN PANEL</h1>
          <p style={{
            fontWeight:300,
            fontSize:"20px"
          }}>Maintain your online store</p>
        </div>
    </Layout>
  )
}

export default Home