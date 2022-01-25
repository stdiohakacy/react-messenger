import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { API_ENDPOINT } from "../../config";
import { AuthContext } from "../../context/AuthContext";
import Post from "../post/Post";
import Share from "../share/Share";
import './feed.css';

export default function Feed({ username }) {
    const [ posts, setPosts ] = useState([]);
    const { user } = useContext(AuthContext);
    
    useEffect(() => {
        const fetchPosts = async () => {
            const response = username
                ? await axios.get(`${API_ENDPOINT}/posts/profile/${username}`)
                : await axios.get(`${API_ENDPOINT}/${user._id}`);
            setPosts(
                response.data.sort((p1, p2) => (new Date(p2.createdAt) - new Date(p1.createdAt)))
            )
        }

        fetchPosts();
    }, [username, user._id])

    return (
        <div className="feed">
            <div className="feedWrapper">
                {(!username || username === user.username) && <Share />}
                {
                    posts.map(post => (
                        <Post key={post.id} post={post} />
                    ))
                }
            </div>
        </div>
    )
}