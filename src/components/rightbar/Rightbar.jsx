import { Add } from "@material-ui/icons";
import { Link } from "react-router-dom";
import Online from "../online/Online";
import './rightbar.css';

export default function RightBar() {
    const HomeRightBar = () => {
        return(
            <>
                <div className="birthdayContainer">
                    <img className="birthdayImg" src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" alt="" />
                    <span className="birthdayText"><b>Pola Foster</b> and <b>3 other friends</b> have a birthday today.</span>
                </div>
                <img className="rightBarAd" src="https://i.pinimg.com/736x/c2/38/43/c23843d5096d36660e7462a137cdcb5f.jpg" alt="" />
                <h4 className="rightBarTitle">Online Friends</h4>
                <ul className="rightBarFriendList">
                    <Online />
                </ul>
            </>
        )
    }

    const ProfileRightBar = () => {
        return (
            <>
                <button className="rightBarFollowButton">Follow <Add/></button>
                <h4 className="rightBarTitle">User Information</h4>
                <div className="rightBarInfo">
                    <div className="rightBarInfoItem">
                        <span className="rightBarInfoKey">City:</span>
                        <span className="rightBarInfoValue">HCM City</span>
                    </div>
                    <div className="rightBarInfoItem">
                        <span className="rightBarInfoKey">From</span>
                        <span className="rightBarInfoValue">HCM City</span>
                    </div>
                    <div className="rightBarInfoItem">
                        <span className="rightBarInfoKey">Relationship</span>
                        <span className="rightBarInfoValue">Single</span>
                    </div>
                </div>
                <h4 className="rightBarTitle">User friends</h4>
                <div className="rightBarFollowings">
                    <Link style={{textDecoration: "none"}}>
                        <div>
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
                                alt=""
                                className="rightBarFollowingImg"
                            />
                            <span className="rightBarFollowingName">duynguyen22</span>
                        </div>
                    </Link>
                </div>
            </>
        )
    }

    return (
        <div className="rightBar">
            <div className="rightBarWrapper">
                {/* <ProfileRightBar /> */}
                <HomeRightBar />
            </div>
        </div>
    )
}