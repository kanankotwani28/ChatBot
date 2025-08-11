import RobortProfileImage from '../assets/images/robot.png';
import UserProfileImage from '../assets/images/robot.png';
import './ChatMessage.css'
export function ChatMessage(props) 
    {
    const {message,sender} = props;
        return (
        <div className={
            sender==='user'
            ?'chat-message-user'
            :'chat-message-robot'
            }>
            {sender === 'robot' && (
            <img src={RobortProfileImage} className="chat-message-profile"/>
            )}  
            <div className="chat-message-text">
                {message}
            </div>
            {sender==='user' && (
            <img src={UserProfileImage} className="chat-message-profile"/>
            )}
        </div>
        );
    }