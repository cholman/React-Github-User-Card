import React from 'react';

const UserCard = props =>{
        return (
            <div className="user-card">
                <p>{props.name}</p>
                <img src={props.avatar_url}/>
                <p>{props.login}</p>
                <p>{props.location}</p>
                <p>{props.bio}</p>

            </div>
        )
}
export default UserCard;