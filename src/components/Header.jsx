import logo from '../assets/logo.jpg';

export default function Header({showCart, itemsInCart}) {
    return (
        <div id="main-header">
            <div id="title">
                <img src={logo} />
                <h1>REACTFOOD</h1>
            </div>
            <button className='text-button' onClick={showCart}>Cart ({itemsInCart})</button>
        </div>
    )
}