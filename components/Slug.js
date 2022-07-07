import { useState } from "react"

const Slug = ({ contents, limit }) => {
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
                                <button onClick={() => setSeeMore(true)}>
                                    see more
                                </button>
                            </span>
                        </>
                    )}
                    {seeMore && (
                        <>
                            {contents}
                            <span>
                                <button onClick={() => setSeeMore(false)}>
                                    {" "}
                                    see less
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
