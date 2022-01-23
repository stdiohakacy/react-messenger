import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_ENDPOINT } from '../../config';
import Feed from '../../components/feed/Feed';
import RightBar from '../../components/rightbar/RightBar';
import Sidebar from '../../components/sidebar/Sidebar';
import TopBar from '../../components/topbar/TopBar';
import './profile.css';

export default function Profile() {
    const [user, setUser] = useState({});
    const { username } = useParams();

    useEffect(() => {
        const fetchUser = async () => {
            const response = await axios.get(`${API_ENDPOINT}/users?username=${username}`);
            setUser(response.data);
        }
        fetchUser();
    }, [ username ])

    return (
        <>
            <TopBar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img
                                className="profileCoverImg"
                                src={user.coverPicture}
                                alt=""
                            />
                            <img
                                className="profileUserImg"
                                src={user.profilePicture}
                                alt=""
                            />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">{user.username}</h4>
                            <span className="profileInfoDesc">{user.desc}</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <RightBar />
                    </div>
                </div>
            </div>
        </>
    )
}