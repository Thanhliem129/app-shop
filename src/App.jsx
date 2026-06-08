import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import CategoryPage from './pages/CategoryPage'
import BlogPage from './pages/BlogPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cua-hang" element={<ShopPage />} />
        <Route path="/danh-muc" element={<CategoryPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/lien-he" element={<ContactPage />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App