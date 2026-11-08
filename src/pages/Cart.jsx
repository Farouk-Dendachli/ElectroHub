import { Link } from "react-router-dom";

const Cart = ({ cart, onIncrease, onDecrease }) => {
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-9">
          <div className="d-flex align-items-center justify-content-between mb-4">
            <h1 className="fw-bold mb-0">Shopping Cart</h1>
            <Link
              to="/services"
              className="btn btn-outline-primary rounded-pill btn-sm"
            >
              Continue Shopping
            </Link>
          </div>

          {cart.length === 0 ? (
            <div className="card border-0 shadow-sm text-center py-5">
              <div className="card-body">
                <h4 className="fw-bold text-muted mb-3">Your cart is empty</h4>
                <p className="text-muted mb-4">
                  Looks like you have not added any products to your cart yet.
                </p>
                <Link
                  to="/services"
                  className="btn btn-primary rounded-pill px-4"
                >
                  Start Shopping
                </Link>
              </div>
            </div>
          ) : (
            <>
              <div className="card border-0 shadow-sm mb-4">
                <div className="card-body p-0">
                  <div className="table-responsive">
                    <table className="table align-middle mb-0">
                      <thead className="table-light">
                        <tr>
                          <th scope="col" className="ps-4">Product</th>
                          <th scope="col">Price</th>
                          <th scope="col" className="text-center">Quantity</th>
                          <th scope="col" className="text-end pe-4">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cart.map((item) => (
                          <tr key={item.title}>
                            <td className="ps-4">
                              <div className="d-flex align-items-center">
                                <img
                                  src={item.image}
                                  alt={item.title}
                                  className="rounded me-3 bg-white"
                                  style={{
                                    width: "60px",
                                    height: "60px",
                                    objectFit: "contain",
                                  }}
                                />
                                <div>
                                  <h6 className="fw-bold mb-0">{item.title}</h6>
                                </div>
                              </div>
                            </td>
                            <td>{item.price.toLocaleString()} USD</td>
                            <td className="text-center">
                              <div className="d-inline-flex align-items-center border rounded-pill px-2 py-1 bg-white">
                                <button
                                  type="button"
                                  className="btn btn-sm btn-link text-dark text-decoration-none p-0 px-2 fw-bold"
                                  onClick={() => onDecrease(item.title)}
                                  aria-label="Decrease quantity"
                                >
                                  -
                                </button>
                                <span className="fw-bold px-2">
                                  {item.quantity}
                                </span>
                                <button
                                  type="button"
                                  className="btn btn-sm btn-link text-dark text-decoration-none p-0 px-2 fw-bold"
                                  onClick={() => onIncrease(item.title)}
                                  aria-label="Increase quantity"
                                >
                                  +
                                </button>
                              </div>
                            </td>
                            <td className="text-end pe-4 fw-bold text-primary">
                              {(item.price * item.quantity).toLocaleString()} USD
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="card border-0 shadow-sm">
                <div className="card-body p-4">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h4 className="fw-bold mb-1">Total Price</h4>
                      <p className="text-muted small mb-0">
                        Total for all items in your cart
                      </p>
                    </div>
                    <h3 className="fw-bold text-primary mb-0">
                      {totalPrice.toLocaleString()} USD
                    </h3>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;