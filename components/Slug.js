import { useState } from "react"

const Slug = ({ contents, limit, setFullHeight }) => {
    const [seeMore, setSeeMore] = useState(false)

    let slug = contents.slice(0, limit)

    return (
        <>
            {contents.length <= limit && <>{contents}</>}
            {contents.length > limit && (
                <>
                    {!seeMore && (
                        <>
                            {slug}{" "}
                            <span>
                                ...
                                <button
                                    onClick={() => {
                                        setSeeMore(true)
                                        setFullHeight(true)
                                    }}
                                >
                                    &gt;&gt;&gt;
                                </button>
                            </span>
                        </>
                    )}
                    {seeMore && (
                        <>
                            {contents}
                            <span>
                                <button
                                    onClick={() => {
                                        setSeeMore(false)
                                        setFullHeight(true)
                                    }}
                                >
                                    {" "}
                                    &lt;&lt;&lt;
                                </button>
                            </span>
                        </>
                    )}
                </>
            )}
        </>
    )
}

export default Slug
