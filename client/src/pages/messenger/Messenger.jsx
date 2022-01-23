import axios from 'axios'
import { useContext, useEffect, useRef, useState } from 'react'
import ChatOnline from '../../components/chatOnline/chatOnline'
import Conversation from '../../components/conversation/Conversation'
import Message from '../../components/message/Message'
import TopBar from '../../components/topbar/TopBar'
import { AuthContext } from '../../context/AuthContext'
import './messenger.css'
import { io } from 'socket.io-client'
import { API_ENDPOINT } from '../../config'

export default function Messenger() {
    const { user } = useContext(AuthContext);
    const [conversations, setConversations] = useState([])
    const [currentChat, setCurrentChat] = useState(null);
    const [newMessage, setNewMessage] = useState("");
    const [arrivalMessage, setArrivalMessage] = useState(null);
    const [messages, setMessages] = useState([]);
    const socket = useRef()

    useEffect(() => {
        socket.current = io("ws://localhost:8900");
        socket.current.on("getMessage", data => {
            setArrivalMessage({
                sender: data.senderId,
                text: data.text,
                createdAt: Date.now(),
            });
        })
    }, [])

    useEffect(() => {
        socket.current.emit("addUser", user._id);
        socket.current.on("getUsers", (users) => {
        })
    })

    useEffect(() => {
        const getConversations = async () => {
            try {
                const res = await axios.get(`${API_ENDPOINT}/conversations/` + user._id);
                setConversations(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getConversations();
    }, [user._id]);

    useEffect(() => {
        const getMessages = async () => {
            try {
                const response = await axios.get(`${API_ENDPOINT}/messages/${currentChat?._id}`)
                setMessages(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        getMessages()
    }, [ currentChat ])

    const handleSubmit = async e => {
        e.preventDefault();
        const message = {
            sender: user._id,
            text: newMessage,
            conversationId: currentChat._id
        }
        const receiverId = currentChat.members.find(member => member !== user._id);
        
        socket.current.emit("sendMessage", {
            senderId: user._id,
            receiverId,
            text: newMessage,
        });

        try {
            const response = await axios.post(`${API_ENDPOINT}/messages`, message);
            setMessages([...messages, response.data]);
            setNewMessage("");
        } catch (err) {
            console.log(err);
        }
    }
    
    return (
        <>
            <TopBar />
            <div className="messenger">
                <div className="chatMenu">
                    <div className="chatMenuWrapper">
                        <input placeholder="Search for friends" className="chatMenuInput" />
                        {
                            conversations.map(conversation => (
                                <div onClick={() => setCurrentChat(conversation)}>
                                    <Conversation />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="chatBox">
                    <div className="chatBoxWrapper">
                        {
                            currentChat ? (
                                <>
                                    <div className="chatBoxTop">
                                        {
                                            messages.map(message => (
                                                <div>
                                                    <Message />
                                                </div>
                                            ))
                                        }
                                    </div>
                                    <div className="chatBoxBottom">
                                        <textarea
                                            className="chatMessageInput"
                                            placeholder="write something..."
                                            onChange={ (e) => setNewMessage(e.target.value)}
                                        ></textarea>
                                        <button className="chatSubmitButton" onClick={handleSubmit}>Send</button>
                                    </div>
                                </>
                            ) : (
                                <span className="noConversationText">
                                    Open a conversation to start a chat.
                                </span> 
                            )
                        }
                        
                    </div>
                </div>
                <div className="chatOnline">
                    <div className="chatOnlineWrapper">
                        <ChatOnline />
                    </div>
                </div>
            </div>
        </>
    )
}