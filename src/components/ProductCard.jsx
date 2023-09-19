import "./css/ProductCard.css";





function ProductCard({ p, searchedText, RangeValue }) {
  if (!p.title.toLowerCase().includes(searchedText.toLowerCase())) {
    return <></>;
  }

  if (p.price > RangeValue) {
    return <></>;
  }

  return (
    <>
      <article className="product-card">
        <h2 className="titles">{p.title}</h2>
        <div className="product-description">
          <img className="product-image" src={p.image} alt={p.title} />
          <p>{p.category}</p>
          <p>${p.price}</p>
          <button className="product-button">Añadir al carrito</button>
        </div>
      </article>
    </>
  );
}

export default ProductCard;