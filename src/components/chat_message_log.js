import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import {useRef, useEffect} from 'react';
const _Chat_Message_Log = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 1rem;
  margin: 0 3px;
  display: flex;
  flex-direction: column;
  background-color: #eee;
  height: 100%;
`;
export default function Chat_Message_Log({messages = []}) {
  const chatLogRef = useRef(null);
  useEffect(() => {
    if (chatLogRef && chatLogRef.current) {
      chatLogRef.current.scrollTop = chatLogRef.current.scrollHeight;
    }
  }, [messages]);
  return (
    <_Chat_Message_Log ref={chatLogRef}>
      <style jsx>{`
        .chat-msg {
          margin-left: 0.5rem;
          word-break: break-word;
          width: 100%;
        }

        .message {
          margin-bottom: 0.5rem;
          display: flex;
          flex-direction: row;
          word-break: break-word;
        }

        .message.ai {
          word-break: break-word;
        }

        .message.human {
          align-self: flex-end;
          background-color: #e0e0e0;
          border-radius: 1rem;
          padding: 0.5rem 1rem;
          align-items: top;
          margin-bottom: 0.5rem;
          word-break: break-word;
        }

        .message img {
          border-radius: 50%;
          height: 24px;
          margin-right: 0.5rem;
          width: 24px;
        }

        svg {
          height: inherit;
          width: inherit;
        }
        .icon {
          width: 24px;
          height: 24px;
          margin-top: 0.5rem;
        }
      `}</style>
      {messages.map((message, index) => (
        <div key={index} className={`message ${message.type}`}>
          {message.type == 'ai' && (
            <div className='icon'>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>
                <rect width='100' height='100' fill='#ccc' />
                <text
                  x='50'
                  y='65'
                  font-size='50'
                  fill='#fff'
                  text-anchor='middle'>
                  P
                </text>
              </svg>
            </div>
          )}

          <div className='chat-msg'>
            <ReactMarkdown>{message.content}</ReactMarkdown>
          </div>
        </div>
      ))}
    </_Chat_Message_Log>
  );
}
