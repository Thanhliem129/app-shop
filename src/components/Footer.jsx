import {  Mail, MapPin, Phone } from 'lucide-react'
import './Footer.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">

          <div className="footer-col">
            <h3 className="footer-logo">Landrick</h3>
            <p className="footer-desc">
              Landrick là theme đa năng hàng đầu dành cho cửa hàng trực tuyến, được tin dùng bởi hơn 50.000 khách hàng trên toàn thế giới.
            </p>
            <div className="footer-social">
              {/* <Facebook size={18} /> */}
              {/* <Instagram size={18} />
              <Twitter size={18} />
              <Youtube size={18} /> */}
            </div>
          </div>

          <div className="footer-col">
            <h4>Liên kết nhanh</h4>
            <ul className="footer-links">
              <li>Về chúng tôi</li>
              <li>Chính sách bảo mật</li>
              <li>Điều khoản sử dụng</li>
              <li>Liên hệ hỗ trợ</li>
              <li>Câu hỏi thường gặp</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Danh mục cửa hàng</h4>
            <ul className="footer-links">
              <li>Thời trang nam</li>
              <li>Thời trang nữ</li>
              <li>Điện tử</li>
              <li>Phụ kiện</li>
              <li>Giày dép</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Đăng ký nhận tin</h4>
            <p className="footer-desc">Nhận thông báo km sớm nhất</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Nhập email của bạn" />
              <button type="submit"><Mail size={16} /></button>
            </form>

            <div className="contact-info">
              <p><MapPin size={16} /> 123 Đường Nguyễn Huệ, TP.HCM</p>
              <p><Phone size={16} /> +84 123 456 789</p>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© 2024 Landrick. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer