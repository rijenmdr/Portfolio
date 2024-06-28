import { List } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import { useState } from 'react'

import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer'
import { navbarItems } from '@/static/nav'
import { usePathname } from 'next/navigation'
import { motion } from "framer-motion";
import ContentSocialMedia from '@/container/home/ContentSocialMedia'

type Props = {}

const MobileDrawer = ({ }: Props) => {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                <List className='text-white w-8 h-8 hover:linear-gradient rounded-full block md:hidden cursor-pointer' />
            </DrawerTrigger>
            <DrawerContent className='bg-primary border-primary text-white px-4 flex flex-col gap-4'>
                <ul className="flex flex-col items-center gap-6 py-8">
                    {
                        navbarItems.map(item => (
                            <li className="uppercase text-base leading-[30px] group relative z-12" key={item.id}>
                                <Link href={item?.link} onClick={() => setOpen(false)} className="relative z-[1]">
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

            </DrawerContent>
        </Drawer>
    )
}

export default MobileDrawer