import React from 'react'
import PropertyHeader from './PropertyHeader'

import OverView from './Overview'
import ProperytyDescriptions from './PropertyDescriptions'

import PropertyFeaturesAminites from './PropertyFeatureAmentities'

import PropertyVideo from './PropertyVideo'

import ScheduleTour from './ScheduleTour'
import Related from '../Related'
import SingleMap from '@/components/shared/SingleMap'
import PropertyGallery from '@/components/shared/PhotoGallery'
import { useLocale, useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'

type Props = {
    data: any
}

const index = ({ data }: Props) => {
    const locale = useLocale()
    unstable_setRequestLocale(locale)
    const t = useTranslations('Rent.Single')
    const t2 = useTranslations('Shared')
    return (
        <section className="pt60 pb90 bgc-f7 min-h-screen">
            {data && (
                <div className="container">
                    <div className=" justify-between flex-wrap gap-20 row-gap-0 flex pb-2">
                        <PropertyHeader
                            title={data?.Name}
                            location={`${data?.Area?.Name ?? ''}, ${
                                data?.City?.Name ?? ''
                            }`}
                            price={data?.Price}
                            area={data?.Size}
                            beds={data?.Bedroom}
                            isRent={data?.IsRental}
                        />
                    </div>

                    {/* End .row */}

                    <div className="row wrap">
                        <div className="col-lg-8">
                            {data?.Images?.length > 0 && (
                                <PropertyGallery
                                    images={data?.Images?.map(
                                        (item: any) => item?.FullPath ?? ''
                                    )}
                                    lat={data?.LatLng?.lat}
                                    lon={data?.LatLng?.lng}
                                />
                            )}

                            <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                                <h4 className="title fz17 mb30">
                                    {t('Overview')}
                                </h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 row-gap-4 gap-2 ">
                                    <OverView
                                        area={data?.Area?.Name}
                                        type={data?.Category?.Name}
                                        beds={data?.Bedroom}
                                        baths={data?.Bathroom}
                                    />
                                </div>
                            </div>

                            {/* End .ps-widget */}

                            {data?.Description && (
                                <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                                    <h4 className="title fz17 mb30">
                                        {t('Desc')}
                                    </h4>
                                    <ProperytyDescriptions
                                        desc={data?.Description}
                                    />
                                    {/* End property description */}
                                </div>
                            )}
                            {/* End .ps-widget */}

                            {/* <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                        <h4 className="title fz17 mb30 mt30">Address</h4>
                        <div className="row">
                            <PropertyAddress
                                lat={data?.LatLng.lat}
                                lon={data?.LatLng?.lng}
                            />
                        </div>
                    </div> */}
                            {/* End .ps-widget */}

                            {data?.Amenities?.length > 0 && (
                                <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                                    <h4 className="title fz17 mb30">
                                        {t('Amenities')}
                                    </h4>
                                    <div className="row">
                                        <PropertyFeaturesAminites
                                            data={data?.Amenities?.map(
                                                (item: any) => item?.Name
                                            )}
                                        />
                                    </div>
                                </div>
                            )}
                            {/* End .ps-widget */}

                            {/* <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                        <h4 className="title fz17 mb30">Energy Class</h4>
                        <div className="row">
                            <EnergyClass />
                        </div>
                    </div> */}
                            {/* End .ps-widget */}

                            {/* {data?.FloorPlan && (
                        <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                            <h4 className="title fz17 mb30">Floor Plans</h4>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="accordion-style1 style2">
                                        <FloorPlans
                                            data={data?.FloorPlan}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )} */}

                            {data?.VideoUrl?.split('=')?.[1] && (
                                <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 ">
                                    <h4 className="title fz17 mb30">
                                        {t('Video')}
                                    </h4>
                                    <div className="row">
                                        <PropertyVideo
                                            videoId={
                                                data?.VideoUrl?.split(
                                                    '='
                                                )?.[1] ?? ''
                                            }
                                        />
                                    </div>
                                </div>
                            )}
                            {/* End .ps-widget

                    {/* <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                        <h4 className="title fz17 mb30">
                            360° Virtual Tour
                        </h4>
                        <div className="row">
                            <VirtualTour360 />
                        </div>
                    </div> */}
                            {/* End .ps-widget */}

                            {/* <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                        <h4 className="title fz17 mb30">
                            What&apos;s Nearby?
                        </h4>
                        <div className="row">
                            <PropertyNearby />
                        </div>
                    </div> */}
                            {/* End .ps-widget */}

                            {/* <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                        <h4 className="title fz17 mb30">Walkscore</h4>
                        <div className="row">
                            <div className="col-md-12">
                                <h4 className="fw400 mb20">
                                    10425 Tabor St Los Angeles CA 90034 USA
                                </h4>
                                <WalkScore />
                            </div>
                        </div>
                    </div> */}
                            {/* End .ps-widget */}

                            {/* <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                        <h4 className="title fz17 mb30">
                            Mortgage Calculator
                        </h4>
                        <div className="row">
                            <MortgageCalculator />
                        </div>
                    </div> */}
                            {/* End .ps-widget */}
                            {/* 
                    <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                        <div className="row">
                            <PropertyViews />
                        </div>
                    </div> */}
                            {/* End .ps-widget */}

                            {/* <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                        <h4 className="title fz17 mb30">Home Value</h4>
                        <div className="row">
                            <HomeValueChart />
                        </div>
                    </div> */}
                            {/* End .ps-widget */}

                            {/* <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                        <h4 className="title fz17 mb30">
                            Get More Information
                        </h4>
                        <InfoWithForm />
                    </div> */}
                            {/* End .ps-widget */}

                            {/* <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                        <div className="row">
                           
                            <AllReviews />
                        </div>
                    </div> */}
                            {/* End .ps-widget */}

                            {/* <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                        <h4 className="title fz17 mb30">Leave A Review</h4>
                        <div className="row">
                            <ReviewBoxForm />
                        </div>
                    </div> */}
                            {/* End .ps-widget */}

                            {data?.LatLng?.lat && data?.LatLng?.lng && (
                                <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                                    <h4 className="title fz17 mb30">
                                        {t('Location')}
                                    </h4>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="accordion-style1 style2">
                                                {/* <FloorPlans
                                                data={data?.FloorPlan}
                                            /> */}

                                                <div className="h510">
                                                    <SingleMap
                                                        lat={data?.LatLng?.lat}
                                                        lon={data?.LatLng?.lng}
                                                    />
                                                    {/* <ListingMap /> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {data && (
                                <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                                    <Related name={t('Similar')} />
                                    {/* End property description */}
                                </div>
                            )}
                        </div>
                        {/* End .col-8 */}

                        <div className="col-lg-4">
                            <div className="column sticky top-[120px]">
                                <div className="default-box-shadow1 bdrs12 bdr1 p30 mb30-md bgc-white position-relative">
                                    <h4 className="form-title mb5">
                                        {t2('ScheduleTour')}
                                    </h4>
                                    <p className="text">{t2('Choose')}</p>
                                    <ScheduleTour
                                        ContactType="Tour"
                                        PropertyId={data?.Id}
                                    />
                                </div>
                                {/* End .Schedule a tour */}

                                {/* <div className="agen-personal-info position-relative bgc-white default-box-shadow1 bdrs12 p30 mt30">
                            <div className="widget-wrapper mb-0">
                                <h6 className="title fz17 mb30">
                                    Get More Information
                                </h6>
                                <ContactWithAgent />
                            </div>
                        </div> */}
                            </div>
                        </div>
                    </div>
                    {/* End .row */}

                    {/* <div className="row mt30 align-items-center justify-content-between">
                <div className="col-auto">
                    <div className="main-title">
                        <h2 className="title">
                            Discover Our Featured Listings
                        </h2>
                        <p className="paragraph">
                            Aliquam lacinia diam quis lacus euismod
                        </p>
                    </div>
                </div>
               

                <div className="col-auto mb30">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-auto">
                            <button className="featured-prev__active swiper_button">
                                <i className="far fa-arrow-left-long" />
                            </button>
                        </div>

                        <div className="col-auto">
                            <div className="pagination swiper--pagination featured-pagination__active" />
                        </div>

                        <div className="col-auto">
                            <button className="featured-next__active swiper_button">
                                <i className="far fa-arrow-right-long" />
                            </button>
                        </div>
                    </div>
                </div>
            </div> */}
                    {/* End .row */}

                    {/* <div className="row">
                <div className="col-lg-12">
                    <div className="property-city-slider">
                        <NearbySimilarProperty />
                    </div>
                </div>
            </div> */}
                    {/* End .row */}
                </div>
            )}
            {/* End .container */}
        </section>
    )
}

export default index
