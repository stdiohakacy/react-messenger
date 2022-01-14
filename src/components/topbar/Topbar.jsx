import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from '../../context/AuthContext'
import { Chat, Person, Search, Notifications } from '@material-ui/icons'
import './topbar.css';

export default function Topbar() {
    const { user } = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER

    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span className="logo">Lamasocial</span>
                </Link>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className="searchIcon" />
                    <input 
                        placeholder="Search for friend, post or video" 
                        type="text" 
                        className="searchInput" 
                    />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat />
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications />
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                {/* <Link to={`/profile/${user.username}`}> */}
                <Link>
                    <img 
                        src="data:image/jpeg;base64,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"
                        // src={user.profilePicture ? PF + user.profilePicture : PF + "person/noAvatar.png"}
                        // src={PF + "person/noAvatar.png"}
                        alt="" 
                        className="topbarImg" 
                    />
                </Link>
            </div>
        </div>
    )
}