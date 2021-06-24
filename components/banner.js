import React from 'react'

const banner = ({data}) => {
    return (
        <div>
            {data.title && <h4>{data.title}</h4>}
        </div>
    )
}

export default banner;