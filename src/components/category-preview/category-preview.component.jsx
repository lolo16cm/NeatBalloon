import './category-preview.styles.scss';
import ProductCard from '../product-card/product-card-component';
import { Link } from 'react-router-dom';

const CategoryPreview = ({ title, products }) => {
    return (
        <div className='category-preview-container'>
            <h2>
                <Link className='title' to={title}>More {title.toUpperCase()} Balloons </Link>
            </h2>
            <p className='categorySubtitle'>Balloons are Shipped Un-Inflated</p>
            <div className='preview'>
                {
                    products
                        .filter((_, idx) => idx < 4)
                        .map((product) => (<ProductCard key={product.id} product={product} />))
                }
            </div>

        </div>
    )

}

export default CategoryPreview; 