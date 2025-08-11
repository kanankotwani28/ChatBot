import {useRef,useEffect} from 'react'
import { ChatMessage } from './ChatMessage.jsx';
import './ChatMessages.css';
function ChatMessages({chatMessages}) 
    {
      const chatMesssagesRef = useRef(null);
      
      useEffect(() =>
        {
          const containerElem = (chatMesssagesRef.current);

          if(containerElem)
          {
            containerElem.scrollTop = containerElem.scrollHeight;
          }
        },[chatMessages]);

      return(
        <div className="chat-messsage-container"
        ref={chatMesssagesRef}>
            {chatMessages.map((chatMessage) =>{
                    return(
                        <ChatMessage
                            message={chatMessage.message}
                            sender={chatMessage.sender}
                            key={chatMessage.id}
                        />        
                    );
            })}
        </div>
        );
    }

export default ChatMessages;