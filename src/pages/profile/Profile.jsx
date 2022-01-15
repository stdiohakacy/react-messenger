import Feed from '../../components/feed/Feed';
import RightBar from '../../components/rightbar/RightBar';
import Sidebar from '../../components/sidebar/Sidebar'
import './profile.css';
import TopBar from '../../components/topbar/TopBar';

export default function Profile() {
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
                                src="https://bestcoverpix.com/wp-content/uploads/2014/01/best-cover-photo.jpg"
                                alt=""
                            />
                            <img
                                className="profileUserImg"
                                src="https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg"
                                alt=""
                            />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">duynguyen2210</h4>
                            <span className="profileInfoDesc">user description</span>
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