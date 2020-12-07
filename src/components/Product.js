import React from 'react'

const Product = (props) => {
    const { product, onAdd } = props;
    return (
        <div>
            <img className="small" src={product.imgsrc} alt={product.name} />
            <h3>{product.name}</h3>
            <div>
                Rs.{product.price}
            </div>
            <div>
                <button onClick={() => onAdd(product)}>Add to cart</button>
            </div>
        </div>
    )
}


export default Product;