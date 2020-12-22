import React from 'react';

const Status = ({ allPosts }) => {
    const renderedItems = allPosts.map(( item) => {
    return (
        <div className="ui card">
                <div className="content">
                    <div className="header">Your name</div>
                        <div className="meta">
                            <span>at 6:00 PM</span>
                        </div>
                        {item}
                </div>

            </div>
    )
    })

    return(
        <div>{renderedItems}</div>
    )
}

export default Status;