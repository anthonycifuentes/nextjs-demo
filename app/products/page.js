/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import React, { useState, useEffect } from 'react'
import ProductCard from './components/product-card';
// import Link from 'next/link'
import Search from './components/search';
import { useRouter } from 'next/navigation' 
const page = () => {
    const router = useRouter();

    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');
    const getProducts = async (search) => {
        const res = await fetch(`https://dummyjson.com/products${search ? `/search?q=${search}` : ''}`);
        const {products} = await res.json();
        setProducts(products);
    }

    useEffect(() => {
        getProducts(search);
    }, [search]);

    const goToProductPage = (id) => {
        router.push(`/products/${id}`)
      }

  return (
    <>
    {/* <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} /> */}
    <Search />
    <div style={{display: "flex", flexWrap: "wrap" }}>
        {products.length !== 0 && products.map((product) => (
        //   <Link href={`/products/${product.id}`} key={product.id}></Link>
                <div onClick={() => goToProductPage(product.id)}>
                <ProductCard product={product} key={product.id}  />
                </div>
      
            ))
        } 
    </div>
    </>
  )
}

export default page