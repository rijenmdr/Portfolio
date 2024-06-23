"use client"

import Image from 'next/image'
import { motion } from "framer-motion";

type Props = {}

const ContentImage = ({ }: Props) => {
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
                src={"/images/user/home.svg"}
                alt="Rijen Manandhar"
                width={600}
                height={80}
                className="object-contain"
            />
        </motion.div>
    )
}

export default ContentImage