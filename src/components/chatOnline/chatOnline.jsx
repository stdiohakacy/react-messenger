import './chatOnline.css'

export default function ChatOnline() {
    return (
        <div className="chatOnline">
            <div className="chatOnlineFriend">
                <div className="chatOnlineImgContainer">
                    <img
                        className="chatOnlineImg"
                        src="https://i1.wp.com/omegle.ws/wp-content/uploads/2021/03/chats-online.png"
                        alt=""
                    />
                    <div className="chatOnlineBadge"></div>
                </div>
                <span className="chatOnlineName">duynguyen1298</span>
            </div>
        </div>
    )
}