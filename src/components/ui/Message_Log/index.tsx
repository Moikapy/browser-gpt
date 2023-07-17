import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import {useRef, useEffect} from 'react';
const _Chat_Message_Log = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  height: calc(100% - 200px);
  margin: 0 auto 0;
  padding: 0.5rem; 
`;
//background-color: rgb(16, 16, 16);

const Container = styled.div`
  margin-bottom: 0.5rem;
  display: flex;
  flex-direction: column;
  word-break: break-word;
  color: #000;
  font-size: 1rem;
  border-radius: 1rem;
  border: 1px solid #000;
  justify-content: center;
  align-items: start;
  padding: 0.5rem;
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const Message = styled.div`
  word-break: break-word;
  width: 100%;
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
        .message.human {
          align-self: flex-end;
          padding: 0.5rem 1rem;
          align-items: top;
        }

        .message img {
          border-radius: 1rem;
          height: 24px;
          margin-right: 0.5rem;
          width: 24px;
        }

        svg {
          height: inherit;
          width: inherit;
          border-radius: 1rem;
          color: green;
        }
        .icon {
          width: 24px;
          height: 24px;
          border-radius: 1rem;
          margin-right: 0.5rem;
        }
      `}</style>
      {messages.map((message, index) => (
        <Container key={index} className={`message ${message.type}`}>
          <Info>
            <div className='icon me-3'>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>
                <rect width='100' height='100' fill={message.type == 'ai'?'#ccc':'#ggg'} />
                <text
                  x='50'
                  y='65'
                  font-size='50'
                  fill='#fff'
                  text-anchor='middle'></text>
              </svg>
            </div>
            {message.type == 'ai' ? <p>AI</p> : <p>User</p>}
          </Info>

          <Message className='chat-msg'>
            <ReactMarkdown>{message.content}</ReactMarkdown>
          </Message>
        </Container>
      ))}
    </_Chat_Message_Log>
  );
}
