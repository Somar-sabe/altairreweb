'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'

const Bedroom = () => {
    const bedOptions = [
        { id: 'xany', label: 'any', value: 0 },
        { id: 'xoneplus', label: '1+', value: 1 },
        { id: 'xtwoplus', label: '2+', value: 2 },
        { id: 'xthreeplus', label: '3+', value: 3 },
        { id: 'xfourplus', label: '4+', value: 4 },
        { id: 'xfiveplus', label: '5+', value: 5 },
    ]

    const searchParams = useSearchParams()
    const router = useRouter()
    const path = usePathname()

    const updateSearchParams = (key: string, value: string) => {
        const currParams = new URLSearchParams(searchParams)
        currParams.set(key, value)
        router.replace(`${path}?${currParams?.toString()}`)
    }

    const selectedMinRooms = searchParams.get('MinRooms') ?? 0

    return (
        <>
            {bedOptions.map((option, index) => (
                <div className="selection" key={option.id}>
                    <input
                        id={option.id}
                        type="radio"
                        onChange={(e) =>
                            updateSearchParams(
                                'MinRooms',
                                e?.currentTarget?.value
                            )
                        }

                        // checked={}
                    />
                    <label htmlFor={option.id}>{option.label}</label>
                </div>
            ))}
        </>
    )
}

export default Bedroom
