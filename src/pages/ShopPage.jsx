import PageHeader from '../components/PageHeader'
import ProductCard from '../components/ProductCard'
import './ShopPage.scss'

const products = [
  {id:1, name:"Áo thun nam", price:29.99, oldPrice:39.99, image:"https://picsum.photos/id/21/400/500"},
  {id:2, name:"Giày chạy bộ", price:79.99, image:"https://picsum.photos/id/7/400/500"},
  {id:3, name:"Tai nghe không dây", price:49.99, oldPrice:69.99, image:"https://picsum.photos/id/3/400/500"},
  {id:4, name:"Đồng hồ thông minh", price:129.99, image:"https://picsum.photos/id/20/400/500"},
  {id:5, name:"Túi xách nữ", price:59.99, image:"https://picsum.photos/id/22/400/500"},
  {id:6, name:"Kính mát", price:34.99, oldPrice:44.99, image:"https://picsum.photos/id/28/400/500"},
]

const ShopPage = () => {
  return (
    <>
      <PageHeader title="Cửa hàng" subtitle="Tất cả sản phẩm của chúng tôi" />
      <section className="shop-page">
        <div className="container">
          <div className="filter-bar">
            <button className="btn btn-primary">Lọc sản phẩm</button>
          </div>
          <div className="products-grid">
            {products.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>
    </>
  )
}

export default ShopPage