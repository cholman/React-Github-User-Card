import React from 'react';

const FollowerCard = props => {
    return (
        <div className="follower-card">
            <p>{props.login}</p>
            <img src={props.avatar_url}/>
        </div>

    )
}

export default FollowerCard;