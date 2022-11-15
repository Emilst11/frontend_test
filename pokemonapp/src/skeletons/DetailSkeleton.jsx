import React from "react";
import '../styles/DetailSkeleton.scss'

const DetailSkeleton = () => {
    return(
        <div className="detailskeleton">
            <div className="detailskeleton-profile">
                <div className="detailskeleton-profile-images"></div>
                <div className="detailskeleton-profile-text">
                    <div className="head"></div>
                    <div className="detailskeleton-profile-text-detail">
                        <p>Species :</p>
                        <div></div>
                    </div>
                    <div className="detailskeleton-profile-text-detail">
                        <p>Height :</p>
                        <div></div>
                    </div>
                    <div className="detailskeleton-profile-text-detail">
                        <p>Ability :</p>
                        <div></div>
                    </div>
                </div>
            </div>
            <div className="skeleton-stats">
                <div className="skeleton-stats-box">
                    <div className="tags"></div>
                    <div className="outer-bar"></div>
                </div>

                <div className="skeleton-stats-box">
                    <div className="tags"></div>
                    <div className="outer-bar"></div>
                </div>

                <div className="skeleton-stats-box">
                    <div className="tags"></div>
                    <div className="outer-bar"></div>
                </div>
            </div>
        </div>
    )
}

export default DetailSkeleton