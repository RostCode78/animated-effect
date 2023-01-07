import { motion } from 'framer-motion';
import Link from "next/link";

const index = () => {
  return (
    <motion.div 
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.70,
          duration: 0.75,
        }}
        className="container-index"
    >
        <Link href="/explore" as="/explore">
            <button><p>Explore</p></button>
        </Link>
    </motion.div>
  )
}

export default index;