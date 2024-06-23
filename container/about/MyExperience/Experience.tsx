import { Separator } from "@/components/ui/separator";

type Props = {
    startYear: string;
    endYear?: string;
    position: string;
    companyName: string;
}

const Experience = ({ startYear, endYear, companyName, position }: Props) => {
    return (
        <div className="flex flex-col gap-3 text-white min-w-[100%] md:min-w-[545px]">
            <div className="flex justify-between items-start sm:items-center flex-col sm:flex-row gap-4">
                <p className="text-1 !font-bold italic">{startYear} - {endYear ? endYear : 'Present'}</p>

                <p className="text-base font-medium">
                    - {companyName}
                </p>
            </div>

            <h4 className="heading-5 md:heading-4">
                {position}
            </h4>

            <Separator className="bg-slate-300"/>
        </div>
    )
}

export default Experience