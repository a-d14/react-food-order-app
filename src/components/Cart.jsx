import { formatter } from "../utils";
import Modal from "./Modal";

export default function Cart({open, close, items, editQuantity}) {

    const totalPrice = items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    return (
        <Modal className="cart" open={open}>
            <h2>Cart</h2>
            {items.length === 0 && <p>Hmmm.... looking kinda empty here.</p>}
            {items.length > 0 && <ul>
                {items.map((item) => (
                    <li key={item.id} className="cart-item">
                        <p>
                            {item.name} - {item.quantity} x {formatter.format(item.price)}
                        </p>
                        <div className="cart-item-actions">
                            <button onClick={() => editQuantity(item, -1)}>-</button>
                            {item.quantity}
                            <button onClick={() => editQuantity(item, 1)}>+</button>
                        </div>
                    </li>
                ))}
            </ul>}
            <p className="cart-total">{formatter.format(totalPrice)}</p>
            <div className="modal-actions">
                <button className="text-button" onClick={close}>Close</button>
                <button className="button">Go To Checkout</button>
            </div>
        </Modal>
    )

}