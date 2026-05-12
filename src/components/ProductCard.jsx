import './ProductCard.css';

function ProductCard({ product }) {
    return (
        <div className="product-card">
            <img className="product-image" src={product.image} alt={product.title} />
            <hr />
            <h3 className="product-title">{product.title}</h3>
            <p className="product-price">{product.price} $</p>
            <small className="product-category">{product.category}</small>
        </div>
    );
}

export default ProductCard;
