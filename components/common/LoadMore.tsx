"use client"

import { useRouter, useSearchParams } from "next/navigation";
import Button from "./Button"

type Props = {
    projectsLength: number;
    totalCount: number
}

const LoadMore = ({ projectsLength, totalCount }: Props) => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const page = searchParams.get('page') || "1"

    const handleLoadMore = () => {
        const updatedPage = Number(page) + 1
        const params = new URLSearchParams(searchParams.toString());
        params.set(`page`, updatedPage?.toString());
        router.push(`?${params.toString()}`);
    }

    return (
        <>
            {
                projectsLength < totalCount ?
                    <div className='mt-16 flex justify-center'>
                        <Button
                            label="Load More"
                            onClick={handleLoadMore}
                        />
                    </div> : null
            }
        </>
    )
}

export default LoadMore