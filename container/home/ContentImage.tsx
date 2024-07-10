"use client"

import Image from 'next/image'
import { motion } from "framer-motion";
import { Image as ImageType } from '@/type/image';

type Props = {
    image: ImageType
}

const ContentImage = ({ image }: Props) => {
    return (
        <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, -20, 0] }}
            transition={{
                duration: 4,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
            }}
        >
            <Image
                src={image?.image}
                alt={image?.alt}
                width={600}
                height={80}
                className="object-contain"
            />
        </motion.div>
    )
}

export default ContentImage