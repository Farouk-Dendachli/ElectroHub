const ProductCard = ({ image, title, price, specs }) => {
  return (
    <div className="card h-100 border-0 shadow-sm">
      <div className="ratio ratio-4x3 bg-white">
        <img src={image} className="object-fit-contain p-3" alt={title} />
      </div>
      <div className="card-body d-flex flex-column text-center">
        <h5 className="card-title fw-bold">{title}</h5>
        <p className="text-primary fw-bold">{price.toLocaleString()} USD</p>
        <ul className="list-unstyled small text-muted text-start mb-3">
          {specs.map((spec) => (
            <li key={spec.label}>
              <span className="fw-semibold">{spec.label}:</span> {spec.value}
            </li>
          ))}
        </ul>
        <button type="button" className="btn btn-dark rounded-pill mt-auto w-100">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
