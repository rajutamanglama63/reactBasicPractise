import React from 'react'

const Header = () => {
    return (
        <header>
            <div className="row block center">
                <div>
                    <a href="#/">
                        <h1>Small shopping cart</h1>
                    </a>
                </div>
                <div>
                    <a href="#/cart">Cart</a>
                </div>
            </div>
        </header>
    )
}

export default Header;