/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import React, { useState, useEffect } from 'react'
import ProductCard from './components/product-card';
import Link from 'next/link'
// import { useRouter } from 'next/router' 
const page = () => {
    // const router = useRouter();

    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        const res = await fetch('https://dummyjson.com/products');
        const {products} = await res.json();
        setProducts(products);
    }

    useEffect(() => {
        getProducts();
    }, []);

    // const goToProductPage = (e, id) => {
    //     e.preventDefault()
    //     router.push(`/products/${id}`)
    //   }

  return (
    <div style={{display: "flex", flexWrap: "wrap" }}>
        {products.length !== 0 && products.map((product) => (
            <Link href={`/products/${product.id}`} key={product.id}>
                <ProductCard product={product} key={product.id}  />
            </Link>
            ))
        } 
    </div>
  )
}

export default page