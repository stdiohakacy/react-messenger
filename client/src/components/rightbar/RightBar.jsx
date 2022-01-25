import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Add, Remove } from "@material-ui/icons";
import { API_ENDPOINT } from "../../config";

export default function RightBar({ user }) {
    const [friends, setFriends] = useState([]);
    const { user: currentUser, dispatch } = useContext(AuthContext);
    const [followed, setFollowed] = useState( currentUser.followings.includes(user?.id));

    useEffect(() => {
        const getFriends = async () => {
            try {
                const friendList = await axios.get(`${API_ENDPOINT}/users/friends/` + user._id);
                setFriends(friendList.data);
            } catch (err) {
                console.log(err);
            }
        };
        getFriends();
    }, [user]);

    const handleClick = async () => {
        try {
            if (followed) {
                await axios.put(`${API_ENDPOINT}/users/${user._id}/unfollow`, {
                    userId: currentUser._id,
                });
                dispatch({ type: "UNFOLLOW", payload: user._id });
            } else {
                await axios.put(`${API_ENDPOINT}/users/${user._id}/follow`, {
                    userId: currentUser._id,
                });
                dispatch({ type: "FOLLOW", payload: user._id });
            }
            setFollowed(!followed);
        } catch (err) {
        }
    };

    const HomeRightBar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img className="birthdayImg" src="assets/gift.png" alt="" />
                    <span className="birthdayText">
                        <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
                    </span>
                </div>
                <img className="rightBarAd" src="assets/ad.png" alt="" />
                <h4 className="rightBarTitle">Online Friends</h4>
                <ul className="rightBarFriendList">
                    {Users.map((u) => (
                        <Online key={u.id} user={u} />
                    ))}
                </ul>
            </>
        );
    };

    const ProfileRightBar = () => {
        return (
            <>
                {user.username !== currentUser.username && (
                    <button className="rightBarFollowButton" onClick={handleClick}>
                        {followed ? "Unfollow" : "Follow"}
                        {followed ? <Remove /> : <Add />}
                    </button>
                )}
                <h4 className="rightBarTitle">User information</h4>
                <div className="rightBarInfo">
                    <div className="rightBarInfoItem">
                        <span className="rightBarInfoKey">City:</span>
                        <span className="rightBarInfoValue">{user.city}</span>
                    </div>
                    <div className="rightBarInfoItem">
                        <span className="rightBarInfoKey">From:</span>
                        <span className="rightBarInfoValue">{user.from}</span>
                    </div>
                    <div className="rightBarInfoItem">
                        <span className="rightBarInfoKey">Relationship:</span>
                        <span className="rightBarInfoValue">
                        {
                            user.relationship === 1
                                ? "Single" : user.relationship === 1
                                ? "Married" : "-"
                        }
                        </span>
                    </div>
                </div>
                <h4 className="rightBarTitle">User friends</h4>
                <div className="rightBarFollowings">
                    {friends.map((friend) => (
                        <Link
                            to={"/profile/" + friend.username}
                            style={{ textDecoration: "none" }}
                        >
                        <div className="rightBarFollowing">
                            <img
                                src={ friend.profilePicture }
                                alt=""
                                className="rightBarFollowingImg"
                            />
                            <span className="rightBarFollowingName">{friend.username}</span>
                        </div>
                        </Link>
                    ))}
                </div>
            </>
        );
    };
    return (
        <div className="rightBar">
            <div className="rightBarWrapper">
                {user ? <ProfileRightBar /> : <HomeRightBar />}
            </div>
        </div>
    );
}