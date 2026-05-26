import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

const Services = () => {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Laptops", "Phones", "Accessories"];

  const filteredProducts = products
    .map((product) => {
      if (filter === "All") {
        return product;
      }
      if (product.category === filter) {
        return product;
      }
      return null;
    })
    .filter((product) => product !== null);

  const getButtonClass = (category) => {
    let buttonClass = "btn rounded-pill ";
    if (filter === category) {
      buttonClass = buttonClass + "btn-primary";
    } else {
      buttonClass = buttonClass + "btn-outline-primary";
    }
    return buttonClass;
  };

  return (
    <div className="container py-5">
      <div className="text-center mb-4">
        <h1 className="fw-bold">Our Products</h1>
        <p className="text-muted">
          Browse laptops, phones, and accessories. Tap a category to filter.
        </p>
      </div>

      <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={getButtonClass(category)}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="row g-4">
        {filteredProducts.map((product) => (
          <div className="col-12 col-sm-6 col-lg-4" key={product.title}>
            <ProductCard
              image={product.image}
              title={product.title}
              price={product.price}
              specs={product.specs}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
