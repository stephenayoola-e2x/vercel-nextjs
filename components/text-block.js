import React from 'react'
import ReactMarkdown from "react-markdown"

const TextBlock = ({data}) => {
    return (
        <div>
            {data.content && <ReactMarkdown>{data.content}</ReactMarkdown>}
        </div>
    )
}

export default TextBlock;