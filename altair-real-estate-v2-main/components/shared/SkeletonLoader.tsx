'use client'
import React from 'react'
import dynamic from 'next/dynamic'

const useMediaQuery: any = dynamic(
    () => import('@uidotdev/usehooks').then((module: any) => module.NamedExport),
    { ssr: false }
  )
  
type Props = {
    numRows: number
}

const SkeletonCard = ({ numRows }: Props) => {
    const isMd = useMediaQuery('(min-width: 768px)')
    const isLg = useMediaQuery('(min-width: 1024px)')
    const numCols = isLg ? 3 : isMd ? 2 : 1
    const numCards = numCols * numRows

    return (
        <>
            {Array.from({ length: numCards }).map((_: any, index: number) => {
                return (
                    <div key={index} className="overflow-hidden">
                        <div className="w-full h-[300px] bg-gray-200 animate-pulse flex flex-col items-center justify-center rounded-lg">
                            <svg
                                className="w-[50%] h-[50%] text-gray-300 rounded-md"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 18"
                            >
                                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                            </svg>
                        </div>

                        <div className="w-full h-2 bg-gray-200 animate-pulse mt-2 rounded-md " />
                        <div className="w-full h-2 bg-gray-200 animate-pulse mt-2 rounded-md" />
                        <div className="w-[40%] h-2 bg-gray-200 animate-pulse mt-2 rounded-md" />
                    </div>
                )
            })}
        </>
    )
}

export default SkeletonCard
