'use client'
import { setLoading } from '@/store/slices/LoadingReducer'
import { useAppDispatch } from '@/store/store'
import { postSubscribe } from '@/utils/routes'
import { useTranslations } from 'next-intl'
import { toast } from 'react-toastify'

const Subscribe = () => {
    const dispatch = useAppDispatch()

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        dispatch(setLoading(true))
        const data = Array.from(e?.currentTarget?.elements)
        data?.splice(-1)
        let req = {}
        data?.forEach((item: any) => {
            req = {
                ...req,
                [item?.name]: item?.value,
            }
        })

        try {
            const res = await postSubscribe(req)
            if (res) toast.success('You have Subscribed!')
            else toast.error('An error has occured!')

            dispatch(setLoading(false))
        } catch (e) {
            toast.error('An error has occured!')
            dispatch(setLoading(false))
        }
    }
    const t = useTranslations('Footer.Subscribe')
    return (
        <div className="mailchimp-widget mb-4 mb-lg-5">
            <h6 className="title text-white mb20">{t('Title')}</h6>
            <div className="mailchimp-style1">
                <form
                    onSubmit={(e) => {
                        onSubmit(e)
                        e?.preventDefault()
                    }}
                >
                    <input
                        type="email"
                        className="form-control"
                        placeholder={t('Placeholder')}
                        name="Email"
                    />
                    <button
                        type="submit"
                        className="absolute rtl:left-[25px] ltr:right-[25px] w-fit"
                    >
                        {t('Button')}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Subscribe
