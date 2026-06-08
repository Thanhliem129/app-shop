import PageHeader from '../components/PageHeader'
import { motion } from 'framer-motion'
import { Calendar, User, ArrowRight } from 'lucide-react'
import './BlogPage.scss'

const posts = [
  {id:1, title: "10 Xu hướng thời trang năm 2024 bạn không nên bỏ lỡ", date: "12 Th6, 2024", author: "Admin", image: "https://picsum.photos/id/96/600/400"},
  {id:2, title: "Cách chọn giày chạy bộ phù hợp với chân của bạn", date: "8 Th6, 2024", author: "Nguyễn Văn A", image: "https://picsum.photos/id/7/600/400"},
  {id:3, title: "Đánh giá tai nghe không dây tốt nhất dưới 1 triệu", date: "2 Th6, 2024", author: "Admin", image: "https://picsum.photos/id/3/600/400"},
]

const BlogPage = () => {
  return (
    <>
      <PageHeader title="Blog" subtitle="Tin tức và mẹo mua sắm mới nhất" />

      <section className="blog-page">
        <div className="container">
          <div className="blog-grid">
            {posts.map((post, index) => (
              <motion.article 
                initial={{opacity:0, y:30}} 
                whileInView={{opacity:1, y:0}}
                transition={{delay: index * 0.1}}
                viewport={{once:true}}
                className="blog-card" key={post.id}
              >
                <img src={post.image} alt={post.title} className="blog-thumb" />
                <div className="blog-content">
                  <div className="blog-meta">
                    <span><Calendar size={14} /> {post.date}</span>
                    <span><User size={14} /> {post.author}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <button className="read-more">Đọc thêm <ArrowRight size={16} /></button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogPage