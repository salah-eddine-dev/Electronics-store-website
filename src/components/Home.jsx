import React, { useEffect, useState } from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import Homeproduct from './home_product'
import { AiFillEye, AiFillHeart, AiOutlineShoppingCart   } from "react-icons/ai";
import { BiLogoFacebook, BiLogoTwitter, BiLogoInstagram, BiLogoYoutube } from "react-icons/bi";

const Home = ({addtocart}) => {
  //product category
  const [newProduct, setNewProduct]  = useState([])
  const [featureProduct, setFeatureProduct]  = useState([])
  const [topProduct, setTopProduct]  = useState([])
  //trending product
  const [trendingProduct, setTrendingProduct] = useState(Homeproduct)
  //filter of trending product
  const filterproduct = (x) =>{
    const filterproduct = Homeproduct.filter((curElm) =>{
      return curElm.type === x
    })
    setTrendingProduct(filterproduct)
  }
  //all Trending product
  const allTrendingProduct = () => {
    setTrendingProduct(Homeproduct)
  }

  //product type
  useEffect(() => {
    productcategory()
  })
  const productcategory = () =>{
    //new product
    const newcategory = Homeproduct.filter((x) => {
      return x.type === 'new'
    })
    setNewProduct(newcategory)
    //feature product
    const featurecategory = Homeproduct.filter((x) => {
      return x.type === 'featured'
    })
    setFeatureProduct(featurecategory)
    //top product
    const topcategory = Homeproduct.filter((x) => {
      return x.type === 'top'
    })
    setTopProduct(topcategory)
  }
  

  return (
    <>
    <div className="home">
      <div className="top_banner">
        <div className="contant">
          <h3>silver aluminum</h3>
          <h2>Apple Watch</h2>
          <p>30% off at your first order</p>
          <Link to='/shop' className='link'>Shop Now</Link>
        </div>
      </div>
      <div className="trending">
        <div className="container">
          <div className="left_box">
            <div className="header">
              <div className="heading">
                <h2 onClick={() => allTrendingProduct()}>trending product</h2>
              </div>
              <div className="cate">
                <h3 onClick={() => {filterproduct('new')}}>New</h3>
                <h3 onClick={() => {filterproduct('featured')}}>Featured</h3>
                <h3 onClick={() => {filterproduct('top')}}>top selling</h3>
              </div>
            </div>
            <div className="products">
              <div className="container">
                {
                  trendingProduct.map((curElm) =>{
                    return (
                      <>
                      <div className="box">
                        <div className="img_box">
                          <img src={curElm.image} alt="" />
                          <div className="icon">
                            <div className="icon_box">
                              <AiFillEye />
                            </div>
                            <div className="icon_box">
                              <AiFillHeart />
                            </div>
                          </div>
                        </div>
                        <div className="info">
                          <h3>{curElm.Name}</h3>
                          <p>${curElm.price}</p>
                          <button className='btn' onClick={() => addtocart(curElm)}>Add to cart</button>
                        </div>
                      </div>
                      </>
                    )
                  })
                }
              </div>
              <button>Show More</button>
            </div>
          </div>
          <div className="right_box">
                <div className="right_container">
                  <div className="testimonial">
                    <div className="head">
                      <h3>our testmonial</h3>
                    </div>
                    <div className="detail">
                      <div className="img_box">
                        <img src="image/T1.avif" alt="testmonial" />
                      </div>
                      <div className="info">
                        <h3>stephan robot</h3>
                        <h4>web designer</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                      </div>
                    </div>
                  </div>
                  <div className="newsletter">
                    <div className="head">
                      <h3>newsletter</h3>
                    </div>
                    <div className="form">
                      <p>join our malling list</p>
                      <input type="email" placeholder='E-mail' autoComplete='off' />
                      <button>subscribe</button>
                      <div className="icon_box">
                        <div className="icon">
                        <BiLogoFacebook />
                        </div>
                        <div className="icon">
                        <BiLogoTwitter />
                        </div>
                        <div className="icon">
                        <BiLogoInstagram />
                        </div>
                        <div className="icon">
                        <BiLogoYoutube />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
          </div>
        </div>
      </div>
      <div className="banners">
        <div className="container">
          <div className="left_box">
            <div className="box">
              <img src="image/Multi-Banner-1.avif" alt="banner" />
            </div>
            <div className="box">
              <img src="image/Multi-Banner-2.avif" alt="banner" />
            </div>
          </div>
          <div className="right_box">
            <div className="top">
              <img src="image/Multi-Banner-3.webp" alt="" />
              <img src="image/Multi-Banner-4.avif" alt="" />
            </div>
            <div className="bottom">
              <img src="image/Multi-Banner-5.webp" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="product_type">
        <div className="container">
          <div className="box">
            <div className="header">
              <h2>New Product</h2>
            </div>
            {
              newProduct.map((curElm) => {
                return (
                  <>
                  <div className="productbox">
                    <div className="img-box">
                      <img src={curElm.image} alt="" />
                    </div>
                    <div className="detail">
                      <h3>{curElm.Name}</h3>
                      <p>${curElm.price}</p>
                      <div className="icon">
                        <button><AiFillEye /></button>
                        <button><AiFillHeart /></button>
                        <button onClick={() => addtocart(curElm)}><AiOutlineShoppingCart /></button>
                      </div>
                    </div>
                  </div>
                  </>
                )
              })
            }
          </div>
          <div className="box">
            <div className="header">
              <h2>Feature Product</h2>
            </div>
            {
              featureProduct.map((curElm) => {
                return (
                  <>
                  <div className="productbox">
                    <div className="img-box">
                      <img src={curElm.image} alt="" />
                    </div>
                    <div className="detail">
                      <h3>{curElm.Name}</h3>
                      <p>${curElm.price}</p>
                      <div className="icon">
                        <button><AiFillEye /></button>
                        <button><AiFillHeart /></button>
                        <button onClick={() => addtocart(curElm)}><AiOutlineShoppingCart /></button>
                      </div>
                    </div>
                  </div>
                  </>
                )
              })
            }
          </div>
          <div className="box">
            <div className="header">
              <h2>Top Product</h2>
            </div>
            {
              topProduct.map((curElm) => {
                return (
                  <>
                  <div className="productbox">
                    <div className="img-box">
                      <img src={curElm.image} alt="" />
                    </div>
                    <div className="detail">
                      <h3>{curElm.Name}</h3>
                      <p>${curElm.price}</p>
                      <div className="icon">
                        <button><AiFillEye /></button>
                        <button><AiFillHeart /></button>
                        <button onClick={() => addtocart(curElm)}><AiOutlineShoppingCart /></button>
                      </div>
                    </div>
                  </div>
                  </>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home