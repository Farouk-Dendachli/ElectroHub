import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

const Home = () => {
  const newestProducts = products
    .map((product, index) => {
      if (index < 4) {
        return product;
      }
      return null;
    })
    .filter((product) => product !== null);

  return (
    <div>
      <section className="bg-primary text-white py-5">
        <div className="container py-4 text-center">
          <h1 className="display-4 fw-bold">The Future of Tech</h1>
          <p className="lead mb-4">
            Shop the latest laptops, phones, and accessories at ElectroHub.
          </p>
          <Link to="/services" className="btn btn-light btn-lg rounded-pill px-4">
            Start Shopping
          </Link>
        </div>
      </section>

      <section className="container py-5">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8">
            <h2 className="fw-bold mb-3">Welcome to ElectroHub</h2>
            <p className="text-muted">
              ElectroHub is your online electronics store. Browse our catalog,
              compare specs, and find the right device for work, school, or
              gaming.
            </p>
          </div>
        </div>
      </section>

      <section className="container pb-5">
        <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-4">
          <h2 className="fw-bold mb-0">New Arrivals</h2>
          <Link className="text-decoration-none" to="/services">
            See all products
          </Link>
        </div>

        <div className="row g-4">
          {newestProducts.map((product) => (
            <div className="col-sm-6 col-lg-3" key={product.title}>
              <ProductCard
                image={product.image}
                title={product.title}
                price={product.price}
                specs={product.specs}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
