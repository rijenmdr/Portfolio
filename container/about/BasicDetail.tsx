import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'
import Link from 'next/link'

type Props = {}

const BasicDetail = ({ }: Props) => {
    return (
        <div className='flex flex-col items-center gap-4 md:gap-8'>
            <Image
                src={"/images/user/about.svg"}
                alt='rijen-manandhar'
                width={340}
                height={350}
                className='object-cover'
            />

            <div className='flex flex-col gap-2 md:gap-4'>
                <div className='flex flex-col gap-3'>
                    <h2 className='heading-3 md:heading-2 linear-gradient bg-clip-text text-transparent text-center'>
                        Rijen Manandhar
                    </h2>

                    <h6 className="w-full heading-6 text-primary text-center">
                        <span className="leading-loose italic">Fullstack Developer</span>{"  "}<span className="font-normal leading-loose"> based in </span><span className="leading-loose italic">Kathmandu</span>
                    </h6>
                </div>

                <Link download href={"/"} className="underline text-2 text-primary flex gap-2 justify-center">
                    <span>Download CV</span>

                    <span className='bg-primary text-white flex justify-center items-center w-6 h-6 rounded-[16px]'>
                        <ArrowUpRight size={14} weight='bold' />
                    </span>
                </Link>
            </div>
        </div>
    )
}

export default BasicDetail