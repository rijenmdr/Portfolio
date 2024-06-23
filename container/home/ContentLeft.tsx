import { Button } from '@/components/common'
import { Mailbox, Phone } from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'

type Props = {}

const ContentLeft = ({ }: Props) => {
    const myDetail = [
        {
            id: 1,
            icon: <Phone weight="bold" size={20} />,
            value: "+977 9813103122"
        },
        {
            id: 2,
            icon: <Mailbox weight="bold" size={20} />,
            value: "rijenmdr47@gmail.com"
        }
    ]
    return (
        <div className="flex flex-col gap-8 md:gap-16">
            <div className="flex flex-col gap-6 md:gap-12">
                <div className="flex flex-col gap-6">
                    <h1 className="w-full md:w-[545px] text-primary heading-2 md:heading-1 drop-shadow-xl uppercase relative">
                        <span className="!font-normal">My name<br />is</span><span className="!font-medium leading-[60px] md:leading-[90px]"> </span><span>Rijen<br />Manandhar</span>

                        <Image
                            src={"/images/ellipse.svg"}
                            alt='ellipse'
                            width={0}
                            height={0}
                            style={{ zIndex: -1 }}
                            className='absolute top-0 -left-[200px] w-[100%] h-[50px] md:h-[100px]'
                        />
                    </h1>

                    <h6 className="w-full md:w-[545px] heading-6 text-primary">
                        <span className="leading-loose italic">Fullstack Developer</span>{"  "}<span className="font-normal leading-loose"> based in </span><span className="leading-loose italic">Kathmandu</span>
                    </h6>
                </div>

                <Button
                    label="Let's talk with me"
                />
            </div>

            <div className="flex gap-6 md:gap-12 items-center flex-wrap">
                {
                    myDetail?.map(detail => (
                        <div key={detail.id} className="flex gap-3 items-center">
                            <div className="bg-primary/5 flex items-center justify-center rounded-full w-8 h-8">
                                {detail?.icon}
                            </div>

                            <p className="text-primary text-lg font-bold leading-normal italic">
                                {detail?.value}
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}


export default ContentLeft