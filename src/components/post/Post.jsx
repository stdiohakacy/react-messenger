import { MoreVert } from "@material-ui/icons";
import { Link } from "react-router-dom";
import './post.css';

export default function Post() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <Link>
                            <img 
                                src="data:image/png;base64,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"
                                // src={PF + "person/noAvatar.png"} 
                                // alt="" 
                                className="postProfileImg" 
                            />
                        </Link>
                        <span className="postUsername">post user name</span>
                        <span className="postDate">post created</span>
                    </div>
                    <div className="postTopRight"><MoreVert/></div>
                </div>
                <div className="postCenter">
                    <span className="postText">Post Description</span>
                    <img src="" alt="" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="https://i.pinimg.com/originals/39/44/6c/39446caa52f53369b92bc97253d2b2f1.png" alt="" className="likeIcon" />
                        <img src="https://i.pinimg.com/originals/39/44/6c/39446caa52f53369b92bc97253d2b2f1.png" alt="" className="likeIcon" />
                        <span className="postLikeCounter">10 people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">10 comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}