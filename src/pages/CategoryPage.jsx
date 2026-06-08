import PageHeader from '../components/PageHeader'
import { motion } from 'framer-motion'
import './CategoryPage.scss'

const categories = [
  {id:1, name: "Thời trang nam", count: 128, image: "https://picsum.photos/id/1005/400/300"},
  {id:2, name: "Thời trang nữ", count: 256, image: "https://picsum.photos/id/1011/400/300"},
  {id:3, name: "Điện tử", count: 87, image: "https://picsum.photos/id/160/400/300"},
  {id:4, name: "Phụ kiện", count: 193, image: "https://picsum.photos/id/26/400/300"},
  {id:5, name: "Giày dép", count: 112, image: "https://picsum.photos/id/7/400/300"},
  {id:6, name: "Đồ gia dụng", count: 76, image: "https://picsum.photos/id/106/400/300"},
]

const CategoryPage = () => {
  return (
    <>
      <PageHeader title="Danh mục sản phẩm" subtitle="Khám phá hàng ngàn sản phẩm theo từng danh mục" />

      <section className="category-page">
        <div className="container">
          <div className="category-grid">
            {categories.map((cat, index) => (
              <motion.div 
                initial={{opacity:0, y:30}} 
                whileInView={{opacity:1, y:0}}
                transition={{delay: index * 0.1}}
                viewport={{once:true}}
                className="category-card" key={cat.id}
              >
                <img src={cat.image} alt={cat.name} />
                <div className="category-info">
                  <h3>{cat.name}</h3>
                  <p>{cat.count} sản phẩm</p>
                  <button className="btn btn-primary btn-sm">Xem ngay</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default CategoryPage