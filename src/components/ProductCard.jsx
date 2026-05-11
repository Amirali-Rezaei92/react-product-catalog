
function ProductCard({ product }) {
    return (
        <div>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.price} $</p>
            <small>{product.category}</small>
        </div>
    );
}

export default ProductCard;
