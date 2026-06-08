import { motion } from 'framer-motion'
import ProductCard from './ProductCard'
import './NewProducts.scss'

const products = [
  {id:1, name:"Áo thun nam", price:29.99, oldPrice:39.99, image:"https://picsum.photos/id/21/400/500"},
  {id:2, name:"Giày chạy bộ", price:79.99, image:"https://picsum.photos/id/7/400/500"},
  {id:3, name:"Tai nghe không dây", price:49.99, oldPrice:69.99, image:"https://picsum.photos/id/3/400/500"},
  {id:4, name:"Đồng hồ thông minh", price:129.99, image:"https://picsum.photos/id/20/400/500"},
]

const NewProducts = () => {
  return (
    <section className="new-products">
      <div className="container">
        <motion.h2 initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true}} className="section-title">
          Sản phẩm mới nhất
        </motion.h2>

        <p className="section-subtitle">Khám phá các sản phẩm chất lượng cao nhất được cập nhật mỗi tuần</p>
        <div className="products-grid">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="view-all-btn">
          <button className="btn btn-primary">Xem tất cả sản phẩm</button>
        </div>
      </div>
    </section>
  )
}

export default NewProducts