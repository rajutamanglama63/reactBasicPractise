import React from 'react'
import Product from './Product';

const Main = (props) => {
    const { products, onAdd } = props;
    return (
        <main className="block col-2">
            <h1>Products</h1>
            <div className="row">
                {products.map((product) => (
                    <Product onAdd={onAdd} key={product.id} product={product} />
                ))}
            </div>
        </main>
    )
}

export default Main;
