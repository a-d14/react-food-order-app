import { formatter } from "../utils";
import Modal from "./Modal";

export default function Checkout({open, close, totalPrice, onCheckout}) {
    return (
        <Modal open={open}>
            <h2>Checkout</h2>
            <p>Total Amount: {formatter.format(totalPrice)}</p>
            <form>
                <div className="control">
                    <label>Full Name</label>
                    <input />
                </div>
                <div className="control">
                    <label>E-mail Address</label>
                    <input />
                </div>
                <div className="control">
                    <label>Street</label>
                    <input />
                </div>
                <div className="control-row">
                    <div className="control">
                        <label>Postal Code</label>
                        <input />
                    </div>
                    <div className="control">
                        <label>City</label>
                        <input />
                    </div>
                </div>
            </form>
            <div className="modal-actions">
                <button className="text-button" onClick={close}>Close</button>
                <button className="button" onClick={onCheckout}>Submit Order</button>
            </div>
        </Modal>
    )
}