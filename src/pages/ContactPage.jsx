import PageHeader from '../components/PageHeader'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Send } from 'lucide-react'
import './ContactPage.scss'

const ContactPage = () => {
  return (
    <>
      <PageHeader title="Liên hệ chúng tôi" subtitle="Mọi thắc mắc hãy gửi tin nhắn cho chúng tôi" />

      <section className="contact-page">
        <div className="container">
          <div className="contact-wrap">
            <motion.div 
              initial={{opacity:0, x:-30}} 
              whileInView={{opacity:1, x:0}}
              viewport={{once:true}}
              className="contact-info-block"
            >
              <h2>Thông tin liên hệ</h2>
              <p className="desc">Chúng tôi luôn sẵn sàng hỗ trợ bạn mọi lúc mọi nơi</p>

              <div className="info-item">
                <MapPin size={20} />
                <div>
                  <h4>Địa chỉ</h4>
                  <p>123 Đường Nguyễn Huệ, Quận 1, TP.HCM</p>
                </div>
              </div>

              <div className="info-item">
                <Phone size={20} />
                <div>
                  <h4>Điện thoại</h4>
                  <p>+84 123 456 789</p>
                </div>
              </div>

              <div className="info-item">
                <Mail size={20} />
                <div>
                  <h4>Email</h4>
                  <p>support@landrick.com</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{opacity:0, x:30}} 
              whileInView={{opacity:1, x:0}}
              viewport={{once:true}}
              className="contact-form-block"
            >
              <form className="contact-form">
                <div className="form-row">
                  <input type="text" placeholder="Họ và tên" />
                  <input type="email" placeholder="Email" />
                </div>
                <input type="text" placeholder="Chủ đề" />
                <textarea placeholder="Nội dung tin nhắn" rows={5}></textarea>
                <button type="submit" className="btn btn-primary">
                  Gửi tin nhắn <Send size={16} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactPage