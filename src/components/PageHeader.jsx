import { motion } from 'framer-motion'
import './PageHeader.scss'

const PageHeader = ({title, subtitle}) => {
  return (
    <section className="page-header">
      <div className="container">
        <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}}>{title}</motion.h1>
        <p>{subtitle}</p>
      </div>
    </section>
  )
}

export default PageHeader