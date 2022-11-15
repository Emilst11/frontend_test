import React from "react";
import '../styles/Pagination.scss'

const Pagination = ({ posts, total, changes, page}) => {
    const pages = []

    for(let i = 1; i <= Math.ceil(total / posts); i++){
        pages.push(i)
    }

    return(
        <div className="base">
            <p>Pages</p>
            <div className="pagination">
                {pages.map( number => (
                    <div key={number} className='pagination-item'>
                        <button onClick={() => changes(number)} className={number === page && 'active'}>{number}</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Pagination