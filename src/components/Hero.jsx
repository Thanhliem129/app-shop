import { motion } from 'framer-motion'
// Import Swiper đúng cách cho React 19
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'

// Import style của Swiper
import 'swiper/css'
import 'swiper/css/pagination'
import './Hero.scss'

const Hero = () => {
  return (
    <section className="hero">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        speed={800}
      >

        <SwiperSlide className="hero-slide">
          <div className="container">
            <div className="slide-content">
              <motion.h1 
                initial={{opacity:0, y:30}} 
                animate={{opacity:1, y:0}} 
                transition={{duration:0.6}}
              >
                Bộ sưu tập <span>mới 2024</span>
              </motion.h1>
              <motion.p 
                initial={{opacity:0, y:30}} 
                animate={{opacity:1, y:0}} 
                transition={{duration:0.6, delay:0.2}}
              >
                Giảm giá lên đến 40% tất cả các sản phẩm, miễn phí vận chuyển toàn quốc
              </motion.p>
              <motion.button 
                initial={{opacity:0, y:30}} 
                animate={{opacity:1, y:0}} 
                transition={{duration:0.6, delay:0.4}} 
                className="btn btn-primary"
              >
                Mua ngay
              </motion.button>
            </div>
            <img src="https://picsum.photos/id/26/800/600" alt="slide" className="slide-img" />
          </div>
        </SwiperSlide>

        <SwiperSlide className="hero-slide">
          <div className="container">
            <div className="slide-content">
              <motion.h1 
                initial={{opacity:0, y:30}} 
                animate={{opacity:1, y:0}} 
                transition={{duration:0.6}}
              >
                Sản phẩm điện tử cao cấp
              </motion.h1>
              <motion.p 
                initial={{opacity:0, y:30}} 
                animate={{opacity:1, y:0}} 
                transition={{duration:0.6, delay:0.2}}
              >
                Bảo hành 2 năm cho tất cả các đơn hàng
              </motion.p>
              <motion.button 
                initial={{opacity:0, y:30}} 
                animate={{opacity:1, y:0}} 
                transition={{duration:0.6, delay:0.4}} 
                className="btn btn-primary"
              >
                Khám phá ngay
              </motion.button>
            </div>
            <img src="https://picsum.photos/id/96/800/600" alt="slide" className="slide-img" />
          </div>
        </SwiperSlide>

      </Swiper>
    </section>
  )
}

export default Hero