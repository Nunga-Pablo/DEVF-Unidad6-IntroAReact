import React from "react";
import "../assets/Styles/PostContainer.css"

export default function PostContainer({children})
{
    return(
        <div className="post-container">{children}</div>
    )
}