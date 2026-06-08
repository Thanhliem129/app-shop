import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ShoppingCart, User, Menu, X, Search } from 'lucide-react'
import './Navbar.scss'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [cartSidebarOpen, setCartSidebarOpen] = useState(false)
  const cartCount = 3

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen || cartSidebarOpen ? 'hidden' : 'auto'
  }, [mobileMenuOpen, cartSidebarOpen])

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-wrap">
          <Link to="/" className="logo">Landrick</Link>

          <ul className={`nav-menu ${mobileMenuOpen ? 'menu-active' : ''}`}>
            <li><NavLink to="/" className="nav-link">Trang chủ</NavLink></li>
            <li><NavLink to="/cua-hang" className="nav-link">Cửa hàng</NavLink></li>
            <li><NavLink to="/danh-muc" className="nav-link">Danh mục</NavLink></li>
            <li><NavLink to="/blog" className="nav-link">Blog</NavLink></li>
            <li><NavLink to="/lien-he" className="nav-link">Liên hệ</NavLink></li>
          </ul>

          <div className="nav-actions">
            <button className="action-btn"><Search size={20} /></button>
            <button className="action-btn"><User size={20} /></button>
            
            <button className="action-btn cart-btn" onClick={() => setCartSidebarOpen(true)}>
              <ShoppingCart size={20} />
              <span className="cart-badge">{cartCount}</span>
            </button>

            <button className="menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && <div className="overlay" onClick={() => setMobileMenuOpen(false)} />}

      <div className={`cart-sidebar ${cartSidebarOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h3>Giỏ hàng</h3>
          <button onClick={() => setCartSidebarOpen(false)}><X size={18} /></button>
        </div>
      </div>

      {cartSidebarOpen && <div className="overlay" onClick={() => setCartSidebarOpen(false)} />}
    </>
  )
}

export default Navbar