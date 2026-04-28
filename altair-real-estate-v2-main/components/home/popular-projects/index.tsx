import React from 'react'

import FilterProperties from './FilterProperties'

type Props = {}

const index = async (props: Props) => {
    return (
        <section className="pt-0 pb60">
            <div className="container">
                <FilterProperties />
            </div>
        </section>
    )
}

export default index
