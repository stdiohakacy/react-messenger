import axios from 'axios';
import { useEffect, useState } from 'react';
import { API_ENDPOINT } from '../../config';
import './conversation.css';

export default function Conversation({ conversation, currentUser }) {
    const [user, setUser] = useState(null);
    
    useEffect(() => {
        const friendId = conversation.members.find((m) => m !== currentUser._id);
    
        const getUser = async () => {
            try {
                const response = await axios(`${API_ENDPOINT}/users?userId=${friendId}`);
                setUser(response.data);
            } catch (err) {
                console.log(err);
            }
        };
        getUser();
    }, [currentUser, conversation]);

    return (
        <div className="conversation">
            <img src={user?.profilePicture} alt="" className="conversationImg" />
            <span className="conversationName">{user.username}</span>
        </div>
    )
}