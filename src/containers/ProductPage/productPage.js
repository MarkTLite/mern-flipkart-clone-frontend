import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { getProductsBySlug } from '../../actions/product_actions';
import { Layout } from '../../components/Layout/layout'
import './productPage.css'
import { generatePublicUrl } from '../../urlConfig';
/**
* @author
* @function ProductPage
**/

export const ProductPage = (props) => {
    //access dispatch hook
    const dispatch = useDispatch();
    //access product state from root reducer
    const product = useSelector(state => state.product);   
    //access Slug
    let { slug } = useParams();
    
    const [productRange,setProductRange] = useState({
        under5k: "5k",
        under10k: "10k",
        under15k: "15k",
        under20k: "20k",
        under40k: "40k"        
    })

    //before redering page, dispatch after getting products
    useEffect(() => {
        dispatch(getProductsBySlug(slug));
    }, [])

    return (
        <div className='product-page'>
            <Layout>
                {
                    Object.keys(product.productsByPrice).map((key, index) => {
                        return (
                            <div className='card'>
                                <div className='cardHeader'>
                                    <div>{slug} Under {productRange[key]}</div>
                                    <button>View All</button>
                                </div>
                                <div style={{display: 'flex'}}>
                                    {
                                        product.productsByPrice[key].map(product =>
                                            <div className='productContainer'>
                                                <div className='productImgContainer'>
                                                    {/*{generatePublicUrl(product.productPictures[0].img)}*/}
                                                     <img src="https://www.t-mobile.com/support/___sbsstatic___/sftp-sync/images/devices/samsung/galaxy-s10/samsung-galaxy-s10-White-00-600x600-hero.png" alt='' /> 
                                                </div>
                                                <div className="productInfo">{product.name}
                                                    <div>
                                                        <span>4.3</span>
                                                        <span>3353</span>
                                                    </div>
                                                    <div className='productPrice'>{product.price}</div>
                                                </div>
                                            </div>)
                                    }
                                </div>

                            </div>
                        );
                    })
                }

            </Layout>
        </div>
    )

}