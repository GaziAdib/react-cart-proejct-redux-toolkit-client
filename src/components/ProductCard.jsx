import React from 'react'

const ProductCard = ({ product }) => {

    const { id, title } = product || {};

    return (
        <div>
            <h1>id: {id}</h1>
            <h2>title: {title}</h2>
        </div>
    )
}

export default ProductCard