import React from 'react'

const TopFilterBar = ({ setCurrentSortingOption, pageContentTrac }: any) => {
    return (
        <>
            <div className="col-sm-6">
                <div className="text-center sm:!text-left rtl:sm:!text-right">
                    <p className="pagination_page_count mb-0">
                        Showing {pageContentTrac[0]}–
                        {pageContentTrac[2] < pageContentTrac[1]
                            ? pageContentTrac[2]
                            : pageContentTrac[1]}{' '}
                        of {pageContentTrac[2]} results
                    </p>
                </div>
            </div>
            {/* End .col-sm-6 */}

            {/* End .col-sm-6 */}
        </>
    )
}

export default TopFilterBar
