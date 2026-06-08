import Hero from '../components/Hero'
import NewProducts from '../components/NewProducts'
import CategoryPage from './CategoryPage'
import ShopPage from './ShopPage'
// import DealBanner from '../components/DealBanner'
// import Testimonials from '../components/Testimonials'

const HomePage = () => {
  return (
    <>
      <Hero />

      <CategoryPage />
      <NewProducts />
      <ShopPage />
      {/* <Testimonials /> */}
    </>
  )
}

export default HomePage