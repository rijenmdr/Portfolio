"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion";

import { navbarItems } from "@/static/nav"

type Props = {}

const Navbar = ({ }: Props) => {
    const pathname = usePathname();
    return (
        <motion.nav
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: [0, -10, 0], opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="wrapper fixed z-10 top-0 left-0 right-0 overflow-y-auto  max-w-[400px]"
        >
            <div className="flex justify-between items-center rounded-full px-12 py-6 mt-6 bg-primary text-white border border-black-900/opacity-10 ">
                <Link href={"/"}>
                    <h4 className="heading-4">{`<Rijen/>`}</h4>
                </Link>
                <ul className="hidden md:flex items-center gap-6">
                    {
                        navbarItems.map(item => (
                            <li className="uppercase text-base leading-[30px] group relative z-12" key={item.id}>
                                <Link href={item?.link} className="relative z-[1]">
                                    {item?.label}
                                </Link>

                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={pathname === item?.link ? { scale: 1 } : {}}
                                    whileHover={{ scale: 1.2, transition: { duration: 0.6 } }}
                                    className={`absolute h-[4px] top-[13.5px] left-0 right-0 linear-gradient group-hover:block ${pathname === item?.link ? "block" : "hidden"}`}
                                />
                            </li>
                        ))
                    }
                </ul>

            </div>
        </motion.nav>
    )
}

export default Navbar