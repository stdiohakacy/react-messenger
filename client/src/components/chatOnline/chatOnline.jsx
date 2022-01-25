import axios from 'axios';
import { useEffect, useState } from 'react'
import './chatOnline.css'
import { API_ENDPOINT } from '../../config'

export default function ChatOnline({ onlineUsers, currentId, setCurrentChat }) {
    const [friends, setFriends] = useState([]);
    const [onlineFriends, setOnlineFriends] = useState([]);

    useEffect(() => {
        const getFriends = async () => {
            const response = await axios.get(`${API_ENDPOINT}/users/friends/${currentId}`);
            setFriends(response.data);
        }
        getFriends()
    }, [ currentId ])

    useEffect(() => {
        setOnlineFriends(friends.filter(friend => onlineUsers.includes(friend._id)));
    }, [friends, onlineUsers])

    const handleClick = async user => {
        try {
            const res = await axios.get(
            `${API_ENDPOINT}/conversations/find/${currentId}/${user._id}`
            );
            setCurrentChat(res.data);
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div className="chatOnline">
            {onlineFriends.map((onlineUser) => (
                <div className="chatOnlineFriend" onClick={() => handleClick(onlineUser)}>
                <div className="chatOnlineImgContainer">
                    <img
                        className="chatOnlineImg"
                        src={onlineUser?.profilePicture}
                        alt=""
                    />
                    <div className="chatOnlineBadge"></div>
                </div>
                <span className="chatOnlineName">{onlineUser?.username}</span>
                </div>
            ))}
        </div>
    )
}