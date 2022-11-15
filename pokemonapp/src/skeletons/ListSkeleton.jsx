import React from "react";
import '../styles/ListSkeleton.scss'

const ListSkeleton = () => {
    return(
        <div className="container">
            <div className="skeleton">
                <div className="skeleton-images"></div>
                <div className="skeleton-text">
                    <div></div>
                </div>
            </div>

            <div className="skeleton">
                <div className="skeleton-images"></div>
                <div className="skeleton-text">
                    <div></div>
                </div>
            </div>

            <div className="skeleton">
                <div className="skeleton-images"></div>
                <div className="skeleton-text">
                    <div></div>
                </div>
            </div>

            <div className="skeleton">
                <div className="skeleton-images"></div>
                <div className="skeleton-text">
                    <div></div>
                </div>
            </div>

            <div className="skeleton">
                <div className="skeleton-images"></div>
                <div className="skeleton-text">
                    <div></div>
                </div>
            </div>
        </div>
    )
}
export default ListSkeleton