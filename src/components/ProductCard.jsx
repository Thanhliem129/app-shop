import { motion } from 'framer-motion'
import { Heart, ShoppingBag, Eye } from 'lucide-react'
import './ProductCard.scss'

const ProductCard = ({product}) => {
  return (
    <motion.div whileHover={{y: -8}} className="product-card">
      <div className="product-img">
        <img src={product.image} alt={product.name} />
        <div className="product-actions">
          <button><Eye size={18} /></button>
          <button><ShoppingBag size={18} /></button>
          <button><Heart size={18} /></button>
        </div>
      </div>
      <div className="product-info">
        <h4>{product.name}</h4>
        <div className="price">
          <span className="current">${product.price}</span>
          {product.oldPrice && <span className="old">${product.oldPrice}</span>}
        </div>
      </div>
    </motion.div>
  )
}

export default ProductCard